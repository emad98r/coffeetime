import "./more-products.scss";

import PeruWholeBean from "../../assets/images/section 7 Peru Whole Bean.jpg";
import EthiopiaOrganicMix from "../../assets/images/section 7 Ethiopia Organic Mix.jpg";
import ColumbiaOrganic from "../../assets/images/section 7 Columbia Organic.jpg";
import EthiopiaRobusta from "../../assets/images/section 7 Ethiopia Robusta.jpg";

import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { SubBtn } from "../Buttons/Buttons";

const productData = [
  {
    id: 1,
    img: PeruWholeBean,
    title: "Peru Whole Bean",
    price: "$42.49",
  },
  {
    id: 2,
    img: EthiopiaOrganicMix,
    title: "Ethiopia Organic Mix",
    price: "$13.49",
  },
  {
    id: 3,
    img: ColumbiaOrganic,
    title: "Columbia Organic",
    price: "$25.00",
  },
  {
    id: 4,
    img: EthiopiaRobusta,
    title: "Ethiopia Robusta",
    price: "$11.49",
  },
];

export default function MoreProducts() {
  return (
    <div className="products-wrapper">
      {productData.map((item) => (
        <div className="item" key={item.id}>
          <div className="img-wrapper">
            <img src={item.img} alt="coffee" />
            <SubBtn name="add to cart" />
          </div>
          <div className="stars">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
          </div>
          <h3>{item.title}</h3>
          <b>{item.price}</b>
        </div>
      ))}
    </div>
  );
}
