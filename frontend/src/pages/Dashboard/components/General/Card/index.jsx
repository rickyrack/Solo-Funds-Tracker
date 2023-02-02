import "./style.scss";

function Card(props) {
  return (
    <section className="CardComp">
      <h3>{props.title}</h3>
      <p className="value">${props.value}</p>
    </section>
  );
}

export default Card;
