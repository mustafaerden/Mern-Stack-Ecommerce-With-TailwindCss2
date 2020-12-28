import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const MainCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src="/images/banner1.jpg" alt="banner1" />
      </div>
      <div>
        <img src="/images/banner2.jpg" alt="banner2" />
      </div>
      <div>
        <img src="/images/banner3.jpg" alt="banner3" />
      </div>
      <div>
        <img src="/images/banner4.jpg" alt="banner4" />
      </div>
      <div>
        <img src="/images/banner5.jpg" alt="banner5" />
      </div>
      <div>
        <img src="/images/banner6.jpg" alt="banner6" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
