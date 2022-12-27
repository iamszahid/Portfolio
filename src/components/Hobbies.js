import x1 from "../assets/img/x1.svg";
import x2 from "../assets/img/x2.svg";
import x3 from "../assets/img/x3.svg";
import x4 from "../assets/img/x4.svg";
import x5 from "../assets/img/x5.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Hobbies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Hobbies</h2>
                        <p>Apart form programming these are few hobbies of mine.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={x1} alt="Image" />
                                <h5>Swimming</h5>
                            </div>
                            <div className="item">
                                <img src={x2} alt="Image" />
                                <h5>Chess</h5>
                            </div>
                            <div className="item">
                                <img src={x3} alt="Image" />
                                <h5>Reading</h5>
                            </div>
                            <div className="item">
                                <img src={x4} alt="Image" />
                                <h5>Cricket</h5>
                            </div>
                            <div className="item">
                                <img src={x5} alt="Image" />
                                <h5>Comics</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
