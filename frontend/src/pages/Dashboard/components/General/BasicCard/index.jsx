import "./style.scss";

function BasicCard(props) {
  return (
    <card className="BasicCardComp">
      <h3>{props.title}</h3>
      <p>{props.value}</p>
    </card>
  );
}

export default BasicCard;
