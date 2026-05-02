export default function DonatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Support the River</h1>
      <p className="mb-8 max-w-xl text-center text-lg text-slate-300">
        Your donation helps fund measurable cleanup, monitoring, restoration, and inclusive stewardship on Florida’s Nature Coast. Thank you for supporting the Lower Withlacoochee Riverkeeper mission!
      </p>
      <a
        href="https://www.paypal.com/ncp/payment/SMCHXWDE8843G"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 mb-6"
      >
        Donate via PayPal
      </a>
      <div className="bg-white rounded-xl p-4 shadow max-w-xs w-full flex flex-col items-center">
        <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="mb-2 w-32" />
        <span className="text-xs text-slate-700">Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="inline h-4 align-middle ml-1" /></span>
      </div>
    </main>
  );
}
