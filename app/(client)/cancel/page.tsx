export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">Payment Cancelled ❌</h1>
        <p className="mt-4 text-gray-700">You can try again at any time.</p>
      </div>
    </div>
  );
}
