'use client';

import CheckoutButton from '@/app/components/CheckoutButton';

export default function PaymentPage() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden">

      {/* Background GIF */}
      <img
        src="/asset/ai.gif"
        alt="AI background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
          Unlock AI Superpowers
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Purchase your AI upgrade pass to gain exclusive access to neural intelligence systems and deep learning tools.
        </p>

        {/* Use the styled CheckoutButton */}
        <CheckoutButton />
      </div>
    </div>
  );
}
