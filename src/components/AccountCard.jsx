import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccountCard() {
    const navigate = useNavigate();

    return (
        <div className="max-w-[222px] w-full rounded-2xl shadow-md border border-gray-200 p-4 bg-white">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">ACCOUNT</h2>

            <button
                className="w-full bg-black text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
                onClick={() => navigate("/login")}
            >
                Sign in
            </button>

            <div className="grid grid-cols-2 gap-2 mt-3">
                <button
                    onClick={() => navigate("/orders")}
                    className="flex flex-col items-center justify-center border border-gray-300 py-2 rounded-sm hover:bg-gray-50 transition"
                >
                    <span className="text-xl mb-1">👜</span>
                    <span className="text-xs font-medium text-gray-700">Orders</span>
                </button>

                <button
                    onClick={() => navigate("/profile")}
                    className="flex flex-col items-center justify-center border border-gray-300 py-2 rounded-sm hover:bg-gray-50 transition"
                >
                    <span className="text-xl mb-1">👤</span>
                    <span className="text-xs font-medium text-gray-700">Profile</span>
                </button>
            </div>
        </div>
    );
}
