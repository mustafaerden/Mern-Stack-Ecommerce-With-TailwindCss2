import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav id="footer" className="bg-orange-500">
      {/* <!-- start container --> */}
      <div className="container mx-auto py-10 lg:px-20 md:px-5 sm:px-5 xs:px-5">
        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            {/* <!-- Column 1 Content --> */}
            {/* <img
              style={{ maxWidth: "70%", height: "auto" }}
              className=""
              src="https://pngimage.net/wp-content/uploads/2019/05/fake-logo-png-.png"
              alt="Logo"
            /> */}
            <div className="text-white mb-4">
              <i className="fab fa-shopify text-3xl pr-2"></i>
              <span className="font-medium text-3xl">E-SHOP</span>
            </div>
            <div>
              <p className="text-white text-lg">
                We are Cebu based online shop which you can find best products
                with best prices of country.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            {/* <!-- Column 2 Content --> */}

            <h4 className="text-white text-2xl font-medium mb-4">Products</h4>
            <ul className="nav navbar-nav">
              <li>
                <Link
                  to="/featured-products"
                  className="text-white text-lg  hover:text-purple-900"
                >
                  Featured Products
                </Link>
              </li>
              <li>
                <Link
                  to="/best-deals"
                  className="text-white text-lg  hover:text-purple-900"
                >
                  Best Deals
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            {/* <!-- Column 3 Content --> */}
            <h4 className="text-white text-2xl font-medium mb-4">Categories</h4>
            <ul className="nav navbar-nav">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-purple-900 text-lg"
                >
                  Men & Women Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white  hover:text-purple-900 text-lg"
                >
                  Mobile Phones
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white  hover:text-purple-900 text-lg"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            {/* <!-- Column 4 Content --> */}

            <h4 className="text-white text-2xl font-medium mb-4">About Us</h4>
            <ul className="nav navbar-nav">
              <li>
                <p className="text-white text-lg">Cebu City</p>
              </li>
              <li>
                <p className="text-white text-lg">+63-956-877-29-77</p>
              </li>
              <li>
                <p className="text-white text-lg">cebueshop@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Start footer bottom --> */}

        <div className="pt-4 md:flex md:items-center md:justify-center border-t-2 border-gray-300">
          <p className="text-white font-medium text-base">
            Copyright © EShop. All Right Reserved.
          </p>
        </div>

        {/* <!-- end container --> */}
      </div>
    </nav>
  );
};

export default Footer;
