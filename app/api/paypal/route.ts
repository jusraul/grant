import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const baseApi = process.env.PAYPAL_API_BASE || "https://api-m.sandbox.paypal.com";

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "PayPal is not configured. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in .env.local.", url: null },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const amount = typeof body.amount === "number" && body.amount > 0 ? body.amount : 25;
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    // Get access token
    const authResponse = await fetch(`${baseApi}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    });

    if (!authResponse.ok) {
      const errBody = await authResponse.text();
      console.error("PayPal auth error:", authResponse.status, errBody);
      return NextResponse.json(
        { error: "Failed to authenticate with PayPal" },
        { status: 500 }
      );
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Create order
    const orderResponse = await fetch(`${baseApi}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount.toFixed(2),
            },
            description: `LWRK Donation — $${amount}`,
          },
        ],
        application_context: {
          brand_name: "Lower Withlacoochee River Keeper",
          return_url: `${baseUrl}/get-involved?donated=true`,
          cancel_url: `${baseUrl}/get-involved`,
          user_action: "PAY_NOW",
        },
      }),
    });

    if (!orderResponse.ok) {
      const errBody = await orderResponse.text();
      console.error("PayPal order error:", orderResponse.status, errBody);
      return NextResponse.json(
        { error: "Failed to create PayPal order" },
        { status: 500 }
      );
    }

    const orderData = await orderResponse.json();
    const approveLink = orderData.links?.find(
      (link: { rel: string; href: string }) => link.rel === "approve"
    );

    if (!approveLink) {
      return NextResponse.json(
        { error: "No approval URL returned from PayPal" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: approveLink.href });
  } catch (err) {
    console.error("PayPal route error:", err);
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
