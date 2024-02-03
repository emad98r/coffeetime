import LeftInfoData, {
  RightInfoData,
} from "../../component/CoffeeInfo/CoffeeInfo";
import "./section-5.scss";
import photo from "../../assets/images/section 5 bg.jpg";

export default function Section_5() {
  return (
    <div className="section-5">
      <div className="container">
        <LeftInfoData />
        <img src={photo} alt="" />
        <RightInfoData />
      </div>
    </div>
  );
}
