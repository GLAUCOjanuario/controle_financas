import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movement } from "../../models/interfaces/Movements/Movement";
import Balance from "../Balance/Balance";
import Expense from "../Expense/Expense";
import "./FinanceControl.css";

const FinanceControl = ({
  balance,
  expenses,
  handleSetMovement,
}: FinanceControlProps) => {
  
  const receiveNewMovement = (movement: Movement) => {
    handleSetMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      <Expense
        curranteBalance={balance}
        currentExpenses={expenses}
        emiteMovement={receiveNewMovement}
      />
    </div>
  );
};

export default FinanceControl;
