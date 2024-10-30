import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovementsProps } from "../../models/interfaces/MovementsProps/MovementsProps";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import "./Movements.css";

const Movements = ({ movementsList }: MovementsProps) => {
  return (
    <div>
      <header className="movements_header">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#7af1a7" size="2x" />
        <h2>
          {`${
            movementsList.length > 0
              ? "Movimentações"
              : "Sem movimentações a exibir..."
          }

                `}
        </h2>
      </header>

      {movementsList.length > 0 &&
        movementsList.map((movement) => (
          <div key={movement.id} className="movimentations_container">
            <div className="movimentations">
              <h3>{movement.name}</h3>

              <h3
                className={`${
                  movement.type === "Input" ? "balance_btn" : "expense_btn"
                }`}
              >
                {movement.type === "Input"? "+" : "-"}
                 R$ {movement.value}
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Movements;
