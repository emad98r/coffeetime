import BigTitle from "../../component/BigTitles/BigTitle";
import "./section-2.scss";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import MainBtn, { SubBtn } from "../../component/Buttons/Buttons";
import photo from "../../assets/images/coffee history.jpg";
function Section_2() {
  return (
    <div className="section-2">
      <div className="container">
        <div className="info">
          <BigTitle
            mainText="Arabica & Robusta"
            subBlackText="Exclusive Planted Coffee"
            paragraph="Maecenas dapibus mattis eros, at fermentum sapien malesuada sitamet. Quisque in sollicitudin eros.sapien sed orci
            accumsan interdum at ac m lorem ut ante pulvinar finibus non non
            metusi."
          />
          <div className="icons">
            <span>
              <IoNewspaperSharp />
              Download price
            </span>
            <span>
              <FaPhoneSquareAlt />
              3-068-387-01-39
            </span>
          </div>
          <div className="buttons">
            <MainBtn name="read more" />
            <SubBtn name="shop now" />
          </div>
        </div>
        <div className="photo">
          <img src={photo} alt="" />
          <p>
            since
            <br /> <span>1967</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
