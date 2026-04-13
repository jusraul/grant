"use client";

import { useState } from "react";

interface DonateButtonProps {
  amount?: number;
  label?: string;
}

export default function DonateButton({
  amount = 25,
  label = "Donate",
}: DonateButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleStripe() {
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(
          "Checkout is not yet configured. Please contact us directly."
        );
      }
    } catch {
      alert(
        "Checkout is not yet configured. Please contact us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  function handlePayPal() {
    const paypalUrl = new URL("https://www.paypal.com/donate");
    paypalUrl.searchParams.set("business", "lowerwithlacoocheeriverkeeper@gmail.com");
    paypalUrl.searchParams.set("amount", String(amount));
    paypalUrl.searchParams.set("currency_code", "USD");
    paypalUrl.searchParams.set("item_name", "LWRK Donation");
    window.location.href = paypalUrl.toString();
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        type="button"
        onClick={handleStripe}
        disabled={loading}
        className="btn-primary w-full disabled:opacity-50"
      >
        {loading ? "Redirecting…" : label}
      </button>
      <button
        type="button"
        onClick={handlePayPal}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#0070ba] text-white font-semibold rounded-lg hover:bg-[#005c99] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:ring-offset-2"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.56A.859.859 0 0 1 5.79 1.84h5.943c2.583 0 4.378.87 5.076 2.467.31.71.396 1.39.274 2.15-.013.082-.031.164-.05.248l-.018.09v.08l.074.04c.548.3.987.682 1.31 1.142.456.65.676 1.472.655 2.44-.024 1.105-.294 2.07-.804 2.867-.46.72-1.068 1.292-1.808 1.702-.672.372-1.45.625-2.315.752a12.19 12.19 0 0 1-1.882.138H11.31a1.07 1.07 0 0 0-1.058.9l-.054.33-.91 5.77-.043.227a.264.264 0 0 1-.26.222H7.076z" />
        </svg>
        Pay with PayPal
      </button>
    </div>
  );
}
