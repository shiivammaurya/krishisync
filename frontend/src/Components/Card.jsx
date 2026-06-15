function Card({ title, description, status }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <h2 className="text-xl font-bold text-green-700 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {status}
      </span>

    </div>
  );
}

export default Card;