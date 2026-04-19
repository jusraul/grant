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
  const [showModal, setShowModal] = useState(false);
  const [customAmount, setCustomAmount] = useState(amount);
  const [payMethod, setPayMethod] = useState<"stripe" | null>(null);

  async function handleStripe(finalAmount: number) {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout is not yet configured. Please contact us directly.");
      }
    } catch {
      alert("Checkout is not yet configured. Please contact us directly.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  }



  function openModal() {
    setPayMethod("stripe");
    setShowModal(true);
  }

  function handleDonate(e: React.FormEvent) {
    e.preventDefault();
    if (!customAmount || customAmount < 1) {
      alert("Please enter a valid amount.");
      return;
    }
    if (payMethod === "stripe") handleStripe(customAmount);
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <button
          type="button"
          onClick={openModal}
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {loading ? "Redirecting…" : label}
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs flex flex-col gap-4"
            onSubmit={handleDonate}
          >
            <h2 className="text-lg font-bold mb-2 text-center">Enter Donation Amount</h2>
            <input
              type="number"
              min={1}
              step={1}
              value={customAmount}
              onChange={e => setCustomAmount(Number(e.target.value))}
              className="border border-sand-300 rounded-lg px-4 py-2 text-lg text-center focus:outline-none focus:ring-2 focus:ring-river-500"
              placeholder="Amount (USD)"
              required
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="btn-primary flex-1"
                disabled={loading}
              >
                {loading ? "Redirecting…" : "Donate"}
              </button>
              <button
                type="button"
                className="btn-secondary flex-1"
                onClick={() => setShowModal(false)}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
