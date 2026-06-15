import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

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
            description="Collection process completed successfully."
            status="Completed"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;