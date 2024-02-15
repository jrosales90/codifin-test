import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* Agregar un estilo condicional para mostrar u ocultar el menú basado en isMenuOpen */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
          >
            Market
          </Link>
          <a
            href="/new-product"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
          >
            New Product
          </a>
        </div>
      </div>
    </nav>
  );
}
