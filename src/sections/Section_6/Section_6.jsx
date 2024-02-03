import BigTitle from "../../component/BigTitles/BigTitle";
import MainBtn from "../../component/Buttons/Buttons";
import "./section-6.scss";
import underPhoto from "../../assets/images/section 6 under bg.jpg";
import videoBg from "../../assets/images/section 6  bg.jpg";

export default function Section_6() {
  return (
    <div className="section-6">
      <div className="wrapper">
        <div className="video">
          <img src={videoBg} alt="" className="video-section-bg" />
          <BigTitle mainText="How we Prepare our Beans" subText="Watch Video" />
          <MainBtn name="click here" />
        </div>
        <ul className="numbers">
          <li>
            37 <span>Selected Varieties</span>
          </li>
          <li>
            259 <span>Hectares of Plantations</span>
          </li>
          <li>
            140 <span>Coffee Pickers</span>
          </li>
          <li>
            75 <span>Consumer Countries</span>
          </li>
        </ul>
      </div>
      <img src={underPhoto} className="under-photo" alt="" />
    </div>
  );
}
