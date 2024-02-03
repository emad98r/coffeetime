import "./section-7.scss";
import { IoMdStar } from "react-icons/io";
import productPic from "../../assets/images/section 7 Ethiopia Arabica.jpg";
import MainBtn, { SubBtn } from "../../component/Buttons/Buttons";
import MoreProducts from "../../component/MoreProducts/MoreProducts";

export default function Section_7() {
  return (
    <div className="section-7">
      <div className="container">
        <div className="section-title">
          <b>Online Store</b>
          <h2>Popular Products</h2>
          <p>
            Maecenas dapibus mattis eros, at fermentum sapien malesuada sit
            amet. Quisque in sollicitudin eros. Aliquam eget sapien sed orci
            accumsan interdum at ac mi.
          </p>
        </div>
        <div className="product">
          <img src={productPic} alt="" />
          <div className="info">
            <div className="stars">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <h3>Ethiopia Arabica</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <ul>
              <li>Pure Grade</li>
              <li>Amazing Vanilla Aroma</li>
              <li>Strong Roasting</li>
              <li>Ultra Grinding</li>
            </ul>
            <div className="prices">
              <del>$ 25.99</del>
              <b>$ 19.99</b>
            </div>
            <div className="buttons">
              <MainBtn name="add to cart" />
              <SubBtn name="more info" />
            </div>
          </div>
        </div>
        <MoreProducts />
        <MainBtn name="Online Store" />
      </div>
    </div>
  );
}
