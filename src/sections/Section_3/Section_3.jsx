import CoffeeBeans from "../../component/CoffeeBeans/CoffeeBeans";
import "./section-3.scss";

function Section_3() {
  return (
    <div className="section-3">
      <div className="container">
        <div className="paragraph">
          <p>
            Morbi eu varius neque, a ultricies sem. Fusce vitae convallis mi.
            Etiam dictum arcu posuere mauris<span> semper accumsan</span> . Ut
            vel nibh a risus hendrerit efficitur. Integer ligula lacus, placerat
            et egestas vel, ultricies ac purus.
          </p>
        </div>
        <div className="coffee-Beans">
          <CoffeeBeans />
        </div>
      </div>
    </div>
  );
}

export default Section_3;
