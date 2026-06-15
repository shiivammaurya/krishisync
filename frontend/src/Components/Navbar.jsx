import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          KrishiSync
        </h1>

        <ul className="hidden md:flex gap-8">
  <Link to="/" className="hover:text-green-200">
    Home
  </Link>

  <Link to="/dashboard" className="hover:text-green-200">
    Dashboard
  </Link>

  <Link to="/farmers" className="hover:text-green-200">
    Farmer Groups
  </Link>

  <Link to="/about" className="hover:text-green-200">
    About
  </Link>
</ul>

        <div className="text-2xl">
          👤
        </div>

      </div>
    </nav>
  );
}

export default Navbar;