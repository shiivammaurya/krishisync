import { useEffect, useState } from "react";

function FarmerGroups() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/farmers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load farmer groups.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-xl font-semibold text-green-700">
          Loading Farmer Groups...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-xl font-semibold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-green-800">
            Registered Farmer Groups
          </h1>

          <p className="text-gray-600 mt-2">
            Live data fetched from KrishiSync Backend API
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {farmers.map((farmer) => (

            <div
              key={farmer.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-t-4 border-green-700"
            >
              <h2 className="text-2xl font-bold text-green-800">
                {farmer.groupName}
              </h2>

              <div className="mt-4 space-y-2 text-gray-700">

                <p>
                  <strong>Village:</strong> {farmer.village}
                </p>

                <p>
                  <strong>Farmers:</strong> {farmer.farmers}
                </p>

                <p>
                  <strong>Status:</strong>
                  <span
                    className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      farmer.status === "Ready"
                        ? "bg-green-100 text-green-700"
                        : farmer.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {farmer.status}
                  </span>
                </p>

              </div>
            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default FarmerGroups;