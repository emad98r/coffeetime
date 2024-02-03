import "./buttons.scss";

function MainBtn(props) {
  return <button className="main-btn">{props.name}</button>;
}
function SubBtn(props) {
  return <button className="sub-btn">{props.name}</button>;
}

export default MainBtn;
export { SubBtn };
