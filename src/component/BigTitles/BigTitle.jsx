import "./bigText.scss";

function BigTitle(props) {
  return (
    <>
      <h1>
        {props.mainText}
        <br />
        <span className="white-text">{props.subText}</span>
        <span className="black-text">{props.subBlackText}</span>
      </h1>
      {/* <p>{props.paragraph}</p> */}
    </>
  );
}

function BlackText(props) {
  return (
    <>
      <h1 className="black-color-text">
        {props.blackText}
        <br />
        <span>{props.whiteText}</span>
      </h1>
      <p className="black-color-p">{props.paragraph}</p>
    </>
  );
}

export default BigTitle;
export { BlackText };
