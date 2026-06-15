function Hero() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-green-700 mb-6">
          Smart Farmer Coordination Platform
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Manage harvest readiness and collection schedules efficiently across multiple farmer groups.
        </p>

        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
          View Dashboard
        </button>

      </div>
    </section>
  );
}

export default Hero;