function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="font-bold text-xl">KrishiSync</h2>
          <p className="text-sm">
            Smart Farmer Coordination Platform
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <p className="text-center text-sm mt-4">
        © 2026 KrishiSync. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;