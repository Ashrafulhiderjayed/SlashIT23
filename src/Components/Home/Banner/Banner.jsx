import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../assets/dessert-bg.jpeg'
import img2 from '../../../assets/pizza-bg.jpg'
import img3 from '../../../assets/soup-bg.jpg'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Dessert</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Pizza</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Soup</p>
                </div>
        </Carousel>
    );
};

export default Banner;