import "./style.scss";

import Card from "./Card";
import { useEffect, useState } from "react";
import { getLoans } from "../../../../api/loanService";
import { useAuth } from "../../../../context/AuthContext";

function Loans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);

  const { authUser } = useAuth();

  useEffect(() => {
    setLoans(() => ([]))
    const fetchLoans = async () => {
      const res = await getLoans();
      console.log('look');
      console.log(res.data);
      try {
        for(let i = 0; i <= res.data.length - 1; i++) {
          console.log(res.data[i]);
          setLoans((data) => ([
            ...data,
            res.data[i]
          ]))
        }
        setLoading(true);
        console.log(loans);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoans();
  }, [authUser, loading])

  return (
    <div className="loanPage">
      <h2>Active Loans</h2>
      <section className="loanCards">
        {loans.map(loan => <Card key={loan.loanee} loanData={JSON.stringify(loan)} />)}
      </section>
    </div>
  );
}

export default Loans;
