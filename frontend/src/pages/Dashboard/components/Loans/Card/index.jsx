import "./style.scss"

function Card(props) {
  const loanData = JSON.parse(props.loanData);
  return (
    <div className="loanCard">
        <h3>{loanData.loanee}</h3>
        <p>Total Loan:</p>
        <p>${loanData.amount}</p>
        <p>Tip:</p>
        <p>XXX</p>
        <p>Total Payback:</p>
        <p>XXX</p>
    </div>
  )
}

export default Card