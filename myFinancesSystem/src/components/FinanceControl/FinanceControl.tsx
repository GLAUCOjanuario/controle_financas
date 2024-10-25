import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movement } from "../../models/interfaces/Movements/Movement";
import Balance from "../Balance/Balance";
import "./FinanceControl.css";

const FinanceControl = ({
  balance,
  expenses,
  handleSetMovement,
}: FinanceControlProps) => {

    const receiveNewMovement = (movement:Movement) =>{
        movement && handleSetMovement(movement);
    };



  return (
    <div className="container_finances">
        <Balance currentBalance={balance} emitMovement={receiveNewMovement}/>

    </div>
    
  );
};

export default FinanceControl;
