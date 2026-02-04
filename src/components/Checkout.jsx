import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const [contact, setContact] = useState({ email: "" });
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    country: "Pakistan",
    city: "",
    postalCode: "",
    phone: "",
    street: "",
  });

  const [amount] = useState("288000.00");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [method, setMethod] = useState("wallet"); // wallet | card

  // Wallet state
  const [walletNumber, setWalletNumber] = useState("");

  // Card state
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    holder: "",
  });

  const handleOpenModal = () => {
    if (!contact.email || !address.firstName || !address.phone) {
      toast.warning("⚠️ Pehle contact aur address fields bharain (name, email, phone).");
      return;
    }
    setShowPaymentModal(true);
  };

  const handlePaySubmit = async () => {
    if (method === "wallet") {
      if (!/^\d{11}$/.test(walletNumber)) {
        toast.warning("⚠️ Enter valid 11-digit JazzCash number.");
        return;
      }
    } else if (method === "card") {
      if (!card.number || !card.expiry || !card.cvv || !card.holder) {
        toast.warning("⚠️ Card details complete karen.");
        return;
      }
    }

    try {
      const res = await fetch("/api/jazzcash/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          customerName: `${address.firstName} ${address.lastName}`,
          customerEmail: contact.email,
          customerPhone: address.phone,
          method,
          ...(method === "wallet"
            ? { walletNumber }
            : { card }),
        }),
      });
      const json = await res.json();

      if (json.paymentUrl) {
        toast.info("🔄 Redirecting to JazzCash...");
        window.location.href = json.paymentUrl;
      } else {
        toast.error("❌ JazzCash payment initiation failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Server error while initiating JazzCash payment.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-black text-white rounded-2xl shadow-lg border border-gray-800 mt-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      {/* Contact & Address */}
      <div className="mb-6">
        <input
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          placeholder="Email"
          className="w-full mb-3 border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none"
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="First name"
            value={address.firstName}
            onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
            className="border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none"
          />
          <input
            placeholder="Last name"
            value={address.lastName}
            onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
            className="border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          <input
            placeholder="Phone"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
            className="border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none col-span-1"
          />
          <input
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none col-span-1"
          />
          <input
            placeholder="Postal"
            value={address.postalCode}
            onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            className="border border-gray-600 bg-gray-900 p-3 rounded-lg outline-none col-span-1"
          />
        </div>
      </div>

      {/* Order summary */}
      <div className="mb-6 border-t border-gray-700 pt-4">
        <div className="flex justify-between mb-2">
          <span>Details</span>
          <span>
            PKR{" "}
            {parseFloat(amount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>

      <button
        onClick={handleOpenModal}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold shadow-md transition duration-200"
      >
        Pay with JazzCash
      </button>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowPaymentModal(false)}
          />
          <div className="relative w-full max-w-lg bg-gray-900 rounded-xl p-6 border border-gray-700 text-white z-10">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Complete Payment</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Payment method switch */}
            <div className="flex gap-2 mt-4 mb-6">
              <button
                onClick={() => setMethod("wallet")}
                className={`flex-1 py-2 rounded-lg font-semibold ${method === "wallet" ? "bg-red-600" : "bg-gray-800"
                  }`}
              >
                JazzCash Wallet
              </button>
              <button
                onClick={() => setMethod("card")}
                className={`flex-1 py-2 rounded-lg font-semibold ${method === "card" ? "bg-red-600" : "bg-gray-800"
                  }`}
              >
                JazzCash Card
              </button>
            </div>

            {/* Wallet Form */}
            {method === "wallet" && (
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  JazzCash Mobile Number
                </label>
                <input
                  type="text"
                  value={walletNumber}
                  onChange={(e) =>
                    setWalletNumber(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="03XXXXXXXXX"
                  maxLength={11}
                  className="w-full border border-gray-600 bg-gray-800 p-3 rounded-lg outline-none"
                />
              </div>
            )}

            {/* Card Form */}
            {method === "card" && (
              <div className="space-y-3">
                <input
                  type="text"
                  value={card.number}
                  onChange={(e) => setCard({ ...card, number: e.target.value })}
                  placeholder="Card Number"
                  className="w-full border border-gray-600 bg-gray-800 p-3 rounded-lg outline-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={card.expiry}
                    onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                    placeholder="MM/YY"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg outline-none"
                  />
                  <input
                    type="text"
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                    placeholder="CVV"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={card.holder}
                  onChange={(e) => setCard({ ...card, holder: e.target.value })}
                  placeholder="Name on Card"
                  className="w-full border border-gray-600 bg-gray-800 p-3 rounded-lg outline-none"
                />
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-gray-400">
                Secured 256-bit SSL encrypted payment
                <div className="mt-1">
                  Powered by JazzCash • <a className="underline">Privacy policy</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-700 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePaySubmit}
                  className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-semibold"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
