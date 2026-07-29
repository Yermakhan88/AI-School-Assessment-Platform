export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[500px] text-center">

        <h1 className="text-4xl font-bold text-blue-700">
          AI School Assessment Platform
        </h1>

        <p className="mt-4 text-gray-600">
          Artificial Intelligence Based Student Assessment System
        </p>

        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg">
          Login
        </button>

      </div>
    </main>
  );
}