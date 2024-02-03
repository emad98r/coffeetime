import "./coffee-beans.scss";
import Arabica_Green from "../../assets/images/Arabica Green section-3.jpg";
import Arabica_Roasted from "../../assets/images/Arabica Roasted section-3.jpg";
import Robusta_Roasted from "../../assets/images/Robusta Roasted section-3.jpg";
import Mixed_Sorts from "../../assets/images/Mixed Sorts section-3.jpg";

const coffeeData = [
  {
    id: 1,
    number: "01",
    img: Arabica_Green,
    name: "Arabica Green",
    paragraph:
      "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
  },
  {
    id: 2,
    number: "02",
    img: Arabica_Roasted,
    name: "Arabica Roasted",
    paragraph: "Praesent at faucibus justo, eu semper massa viverra luctus.",
  },
  {
    id: 3,
    number: "03",
    img: Robusta_Roasted,
    name: "Robusta Roasted",
    paragraph: "Fusce venenatis ante ac interdum faucibus proin nunc.",
  },
  {
    id: 4,
    number: "04",
    img: Mixed_Sorts,
    name: "Mixed Sorts",
    paragraph:
      "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
  },
];

export default function CoffeeBeans() {
  return (
    <>
      {coffeeData.map((coffee) => (
        <div key={coffee.id} className="coffee-bean">
          <div className="img">
            <img src={coffee.img} alt={coffee.name} />
            <span>{coffee.number}</span>
          </div>
          <div className="info">
            <h3>{coffee.name}</h3>
            <p>{coffee.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
}
