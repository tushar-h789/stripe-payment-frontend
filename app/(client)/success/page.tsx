'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect back to home page after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Payment Successful!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <p className="text-sm text-gray-500">
          You will be redirected to the home page in 5 seconds...
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
