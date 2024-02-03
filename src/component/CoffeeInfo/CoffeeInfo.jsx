import "./coffee-info.scss";
import { GiFallingLeaf } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiPlantFill } from "react-icons/pi";
import { BsCupHotFill } from "react-icons/bs";

const coffeeInfoLeftData = [
  {
    id: 1,
    icon: <GiFallingLeaf />,
    title: "Pure Grades",
    paragraph:
      "Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.",
  },
  {
    id: 2,
    icon: <GiCoffeeBeans />,
    title: "Wide Assortment",
    paragraph:
      "Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue eget turpis ligula.",
  },
  {
    id: 3,
    icon: <ImFire />,
    title: "Proper Roasting",
    paragraph:
      "Proin non vulputate diam, ut varius orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const coffeeInfoRightData = [
  {
    id: 4,
    icon: <AiFillSafetyCertificate />,
    title: "High Quality",
    paragraph:
      "Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.",
  },
  {
    id: 5,
    icon: <PiPlantFill />,
    title: "Excellent Grinding",
    paragraph:
      "Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue eget turpis ligula.",
  },
  {
    id: 6,
    icon: <BsCupHotFill />,
    title: "Awesome Aroma",
    paragraph:
      "Proin non vulputate diam, ut varius orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function LeftInfoData() {
  return (
    <div className="left-wrapper">
      {coffeeInfoLeftData.map((left) => (
        <div className="left-side" key={left.id}>
          {left.icon}
          <div className="info">
            <h4>{left.title}</h4>
            <p>{left.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RightInfoData() {
  return (
    <div className="right-wrapper">
      {coffeeInfoRightData.map((right) => (
        <div className="right-side" key={right.id}>
          <div className="info">
            <h4>{right.title}</h4>
            <p>{right.paragraph}</p>
          </div>
          {right.icon}
        </div>
      ))}
    </div>
  );
}

export default LeftInfoData;
export { RightInfoData };
