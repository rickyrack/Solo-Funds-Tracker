import Card from "./Card";
import "./style.scss";

function General(props) {
  const { displayName, invest } = props.userData;
  return (
    <div className="generalPage">
      <h2>Hello, {displayName}</h2>
      <Card title="Currently Invested" value={invest.current}/>
      <Card title="All Time Invested" value={invest.total}/>
    </div>
  );
}

export default General;
