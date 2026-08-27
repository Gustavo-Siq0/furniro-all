import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserRound } from "lucide-react";

import logo from "../../assets/img/logo.png";

const Header = () =>  {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[999] flex h-[80px] w-full justify-center bg-white shadow-sm transition-all md:h-[100px]">
        <div className="flex h-full w-full max-w-[1183px] items-center justify-between px-5 lg:px-0">
          {/* =========================================
              LOGO
          ========================================= */}
          <Link
            to="/"
            className="flex flex-1 items-center justify-start relative focus:outline-none"
          >
            <img
              src={logo}
              alt="Furniro Logo"
              className="w-10 md:w-12 h-auto mr-[5px] lg:absolute lg:right-full lg:mr-0"
            />

            <span className="font-montserrat font-bold text-[28px] md:text-[34px] leading-none tracking-tight text-[#000000] lg:pl-[5px]">
              Furniro
            </span>
          </Link>

          {/* =========================================
              MENU DESKTOP
          ========================================= */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-[75px] font-poppins font-medium text-[#000000] text-base">
            <Link
              to="/"
              className="hover:text-[#B88E2F] transition-colors"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="hover:text-[#B88E2F] transition-colors"
            >
              Shop
            </Link>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#B88E2F] transition-colors cursor-pointer"
            >
              About
            </a>

            <Link
              to="/"
              className="hover:text-[#B88E2F] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* =========================================
              AÇÕES
          ========================================= */}
          <div className="flex flex-1 items-center justify-end gap-5 lg:gap-[35px] text-[#000000]">
            <UserRound
              aria-label="Perfil"
              className="size-6 cursor-pointer transition-opacity hover:opacity-75 lg:size-7"
            />

            <Link to="/cart">
              <ShoppingCart
                aria-label="Carrinho"
                className="size-6 cursor-pointer transition-opacity hover:opacity-75 lg:size-7"
              />
            </Link>

            {/* =========================================
                BOTÃO HAMBURGER
            ========================================= */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-1 hover:text-[#B88E2F] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          OVERLAY
      ========================================= */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* =========================================
          MENU MOBILE
      ========================================= */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-[999] transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={closeMenu}
            className="text-3xl hover:text-[#B88E2F]"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-8 gap-8 font-poppins text-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#B88E2F]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={closeMenu}
            className="hover:text-[#B88E2F]"
          >
            Shop
          </Link>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
            }}
            className="hover:text-[#B88E2F] cursor-pointer"
          >
            About
          </a>

          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#B88E2F]"
          >
            Contact
          </Link>

          <hr />

          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#B88E2F]"
          >
            Cart
          </Link>

          <button className="text-left hover:text-[#B88E2F]">
            Profile
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Header;