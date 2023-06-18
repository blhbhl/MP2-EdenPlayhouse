import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const CarouselWrapper = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
      <div>
        <img src="1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="4.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;