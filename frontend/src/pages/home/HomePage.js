import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeaturedProducts } from "../../store/actions/productActions";
import MainCarousel from "../../components/carousels/MainCarousel";
import FeaturedProduct from "../../components/product/featuredProducts/FeaturedProduct";
import Spinner from "../../components/common/spinner/Spinner";

const HomePage = () => {
  const dispatch = useDispatch();

  const featuredProductList = useSelector((state) => state.featuredProducts);
  const { loading, error, products } = featuredProductList;

  useEffect(() => {
    dispatch(getAllFeaturedProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <MainCarousel />

      <section className="container md:mx-auto py-10 lg:px-20 md:px-5 sm:px-5 xs:px-5 my-3">
        <h1 className="font-medium md:text-xl px-5 py-2 inline bg-orange-500 text-white border-b-3 border-orange-700 xs:text-small">
          Featured Products
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 gap-4 my-5">
          {products &&
            products.map((product) => (
              <FeaturedProduct key={product._id} product={product} />
            ))}
        </div>
      </section>
      <section className="container md:mx-auto lg:px-20 md:px-5 sm:px-5 xs:px-5 h-32 mb-14">
        <div className="px-5 py-2 bg-gray-800 h-full rounded flex items-center justify-center shadow-lg">
          <div className="text-center border-r-2 pr-12">
            <h4 className="text-white  font-medium text-xl">
              Cash on Delivery
            </h4>
            <p className="text-sm text-gray-400 font-medium">
              To Cebu & Mandaue City & Lapu Lapu
            </p>
          </div>
          <div className="text-center border-r-2 px-12">
            <h4 className="text-white font-medium text-xl">Money Return</h4>
            <p className="text-sm  text-gray-400 font-medium">
              7 days for free return
            </p>
          </div>
          <div className="text-center pl-12">
            <h4 className="text-white font-medium text-xl">Online Support</h4>
            <p className="text-sm  text-gray-400 font-medium">
              Support 24 hours a day
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
