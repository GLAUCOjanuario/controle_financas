import { Movement } from "../Movements/Movement"

export interface FinanceControlProps {
    handleSetMovement:(movement: Movement) => void;
    balance:number;
    expenses:number;

    }
