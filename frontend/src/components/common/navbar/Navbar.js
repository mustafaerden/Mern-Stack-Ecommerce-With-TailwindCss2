import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartOnHover from "../cart/CartOnHover";

const Navbar = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
      console.log(offset);
    } else {
      setScrolled(false);
    }
  };

  const handleOpenCategories = () => {
    setOpenCategories(true);
  };

  const handleCloseCategories = () => {
    setOpenCategories(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="sticky top-0 z-10 bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 xs:px-5 sm:px-5">
        <div className="flex justify-between items-center  py-4 md:justify-start md:space-x-10">
          <div className="flex flex-col justify-center items-center lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="sr-only">Workflow</span>
              {/* Logo */}
              <i className="text-orange-500 fab fa-shopify text-3xl pr-2"></i>
              <span className="text-orange-500 hover:text-orange-700 font-medium text-3xl">
                E-SHOP
              </span>
            </a>

            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                onMouseEnter={handleOpenCategories}
                onMouseLeave={handleCloseCategories}
                type="button"
                className="group bg-white rounded-md text-gray-700 font-medium hover:text-orange-700 focus:outline-none"
              >
                <div className="flex justify-between items-center hover:border-orange-700">
                  <span className="py-2">See Categories</span>
                  <svg
                    className="ml-2 h-5 w-5 text-gray-700 group-hover:text-orange-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>

              {/* <!--
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            --> */}
              <div
                className={`absolute w-72 ${!openCategories ? "hidden" : ""}`}
                onMouseEnter={handleOpenCategories}
                onMouseLeave={handleCloseCategories}
              >
                <div className="shadow-lg py-4 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="z-20 relative bg-white">
                    <a
                      href="#"
                      className="p-2 flex items-center rounded-lg hover:bg-gray-50 space-x-2"
                    >
                      <i className="fas fa-tshirt w-6 text-center text-orange-500"></i>
                      <p className="font-medium text-gray-900">
                        Men & Women Clothing
                      </p>
                    </a>
                    <a
                      href="#"
                      className="p-2 flex items-center rounded-lg hover:bg-gray-50 space-x-2"
                    >
                      <i className="fas fa-mobile-alt w-6 text-center text-orange-500"></i>
                      <p className="font-medium text-gray-900">Mobile Phones</p>
                    </a>
                    <a
                      href="#"
                      className="p-2 flex items-center rounded-lg hover:bg-gray-50 space-x-2"
                    >
                      <i className="fas fa-book-open w-6 text-center text-orange-500"></i>
                      <p className="font-medium text-gray-900">Books</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex flex-grow">
            <input
              className="border-3 border-orange-500 flex-grow px-3 shadow-inner text-gray-500 focus:outline-none focus:border-2 focus:border-orange-500"
              placeholder="Search by category or product"
              type="text"
            />
            <button className="border-3 border-orange-500 py-2 px-3 bg-orange-500">
              <i className="fas fa-search text-white"></i>
            </button>
          </nav>

          <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0 space-x-4">
            <div className="border-r-2 pr-2">
              <Link
                className="text-gray-700 font-medium hover:text-orange-700"
                to="/my-account"
              >
                My Account
              </Link>
              <div className="flex items-center space-x-2">
                <Link
                  className="text-sm text-orange-500 hover:text-orange-700"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-sm text-orange-500 hover:text-orange-700"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="relative">
              <Link to="/cart">
                <i className="fas fa-shopping-cart text-orange-500 text-2xl hover:text-orange-700"></i>
                <span className="absolute bg-gray-700 p-3 text-white font-medium rounded-full h-5 w-5 flex items-center justify-center -top-2 left-5">
                  {cartItems.length}
                </span>
              </Link>
              <div className="absolute shadow-lg top-14 -left-72 w-96 ring-1 ring-black ring-opacity-5 bg-white">
                <CartOnHover />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
      <div className="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: x --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
