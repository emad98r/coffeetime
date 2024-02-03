import "./section-4.scss";
import photo1 from "../../assets/images/section 4 bg.jpg";
import photo2 from "../../assets/images/section 4 bg2.jpg";
import { BlackText } from "../../component/BigTitles/BigTitle";
import { SubBtn } from "../../component/Buttons/Buttons";

export default function Section_4() {
  return (
    <div className="section-4">
      <img src={photo1} alt="coffee" />
      <div className="info">
        <div className="wrapper">
          <BlackText
            blackText="Divine"
            whiteText="Aroma in Every Cup"
            paragraph="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
          />
          <SubBtn name="read more" />
        </div>
      </div>
      <img src={photo2} alt="coffee" />
    </div>
  );
}
