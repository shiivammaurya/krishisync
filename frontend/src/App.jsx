import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-5xl font-bold text-green-600">
          Welcome to KrishiSync
        </h1>
      </div>
    </>
  );
}

export default App;