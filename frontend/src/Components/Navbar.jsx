function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          KrishiSync
        </h1>

        <ul className="hidden md:flex gap-8">
          <li className="cursor-pointer hover:text-green-200">
            Home
          </li>

          <li className="cursor-pointer hover:text-green-200">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-green-200">
            Farmer Groups
          </li>

          <li className="cursor-pointer hover:text-green-200">
            About
          </li>
        </ul>

        <div className="text-2xl">
          👤
        </div>

      </div>
    </nav>
  );
}

export default Navbar;