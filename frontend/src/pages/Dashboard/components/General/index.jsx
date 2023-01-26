import "./style.scss";

function General(props) {
  const { displayName, invest } = props.userData;
  return (
    <div className="generalPage">
      <h2>Hello, {displayName}</h2>
      <p>Currently Invested: {invest.current}</p>
      <p>All time Invested: {invest.total}</p>
    </div>
  );
}

export default General;
