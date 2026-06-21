import { useState } from "react";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const stats = [
    {
      title: "Total Farmers",
      value: "128",
      color: "text-blue-500",
    },
    {
      title: "Ready for Harvest",
      value: "82",
      color: "text-green-500",
    },
    {
      title: "Pending Collection",
      value: "31",
      color: "text-yellow-500",
    },
    {
      title: "Completed",
      value: "15",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-6">
        Dashboard
      </h1>

      <div className="flex justify-center mb-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Create Farmer Group
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
          >
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p
              className={`text-4xl font-bold mt-4 ${item.color}`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-4">
              Create Farmer Group
            </h2>

            <input
              type="text"
              placeholder="Group Name"
              className="w-full border p-2 rounded mb-3 text-black"
            />

            <input
              type="text"
              placeholder="Village Name"
              className="w-full border p-2 rounded mb-3 text-black"
            />

            <input
              type="number"
              placeholder="Number of Farmers"
              className="w-full border p-2 rounded mb-4 text-black"
            />

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setLoading(true);

                  setTimeout(() => {
                    setLoading(false);
                    setShowToast(true);
                    setIsModalOpen(false);

                    setTimeout(() => {
                      setShowToast(false);
                    }, 3000);
                  }, 2000);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && <Loader />}

      {showToast && (
        <Toast message="Farmer Group Created Successfully!" />
      )}
    </div>
  );
}

export default Dashboard;