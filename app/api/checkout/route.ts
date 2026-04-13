import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY");

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-03-25.dahlia",
  });

  try {
    const body = await request.json();
    const amount = typeof body.amount === "number" && body.amount > 0 ? body.amount : 25;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `LWRK Donation — $${amount}`,
              description: "Donation to Lower Withlacoochee River Keeper",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/get-involved?donated=true`,
      cancel_url: `${baseUrl}/get-involved`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
