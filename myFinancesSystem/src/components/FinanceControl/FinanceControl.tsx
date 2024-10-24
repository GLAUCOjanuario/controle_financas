import { Movement } from "../../models/interfaces/Movements/Movement";

interface FinanceControlProps {
    balance: number;
    expenses: number;
    handleSetMovement: (movement: Movement) => void;
  }
  
  const FinanceControl = ({ balance, expenses, handleSetMovement }: FinanceControlProps) => {
    return (
      <div>
        <h2>Current Balance: {balance}</h2>
        <h2>Current Expenses: {expenses}</h2>
        {/* Aqui você pode ter uma função para adicionar movimentações */}
        <button onClick={() => handleSetMovement({ name: 'New Movement', value: 100, type: 'Input', id: '123' })}>
          Add Movement
        </button>
      </div>
    );
  };
  
  export default FinanceControl;
  