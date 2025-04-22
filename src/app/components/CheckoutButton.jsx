// "use client";

// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CheckoutButton() {
//   const handleClick = async () => {
//     const stripe = await stripePromise;
//     const res = await fetch('/api/create-checkout-session', {
//       method: 'POST',
//     });
//     const data = await res.json();
//     await stripe.redirectToCheckout({ sessionId: data.id });
//   };

//   return (
//     <button onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">
//       Pay $20
//     </button>
//   );
// }


// app/components/CheckoutButton.tsx
'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const data = await res.json();

    if (data.id && stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      alert('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-10 py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform duration-300 ${
        loading
          ? 'bg-gray-600 cursor-not-allowed'
          : 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:scale-105 hover:shadow-fuchsia-500/40'
      }`}
    >
      {loading ? 'Redirecting...' : 'Pay Now $19.99'}
    </button>
  );
}
