import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Farmer Groups
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Group A"
            description="Harvest collection scheduled for this week."
            status="Ready"
          />

          <Card
            title="Group B"
            description="Waiting for readiness confirmation."
            status="Pending"
          />

          <Card
            title="Group C"
            description="Collection completed successfully."
            status="Completed"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;