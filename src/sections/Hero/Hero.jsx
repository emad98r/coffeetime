import "./hero.scss";
import coffeeImg from "../../assets/images/coffee-bean.png";
import bigTitleImg from "../../assets/images/hero bg.jpg";
import BigTitle from "../../component/BigTitles/BigTitle";
function Hero() {
  return (
    <div className="hero">
      <img src={bigTitleImg} alt="" className="big-title-bg" />
      <div className="wrapper">
        <div className="big-title">
          <BigTitle mainText="Natural" subText=" Brazilian Coffee" />
          <p>
            Curabitur imperdiet varius lacus, id placerat purus vulputate non.
            Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
            gravida vel porttitor et, pretium ac sapien.
          </p>
        </div>
        <div className="coffee-img">
          <img src={coffeeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
