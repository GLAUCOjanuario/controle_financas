import "./App.css";
import Header from "./components/Header/Header";
import FinanceControl from "./components/FinanceControl/FinanceControl";
import { useState } from "react";
import { Movement } from "./models/interfaces/Movements/Movement";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); // State de saldo atual
  const [currentExpenses, setCurrentExpenses] = useState(0); // State de despesas atual
  const [movementsItens, setmovementsItens] = useState<Array<Movement>>([]); // State de movimentações

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setmovementsItens((prevMovements) => {
        // Adiciona a nova movimentação no início do array
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        });
        return movements; // Retorna o array atualizado
      });

      // Atualiza o saldo com base no tipo de movimentação
      if (movement.type === "Input") {
        setCurrentBalance((prevBalance) => prevBalance + Number(movement.value));
      }

      if (movement.type === "Output") {
        setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value));

        // Verifica se o saldo é maior que o valor a ser subtraído
        if (currentBalance >= Number(movement.value)) {
          setCurrentBalance((prevBalance) => prevBalance - Number(movement.value));
        } else {
          setCurrentBalance(0); // Define o saldo como zero se o valor a ser subtraído é maior
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <FinanceControl
        balance={currentBalance} 
        expenses={currentExpenses}
        handleSetMovement={setNewMovement} 
      />
    </div>
  );
}

export default App;
