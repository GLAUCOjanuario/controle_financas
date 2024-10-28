import {Movement} from '../Movements/Movement'


export interface ExpenseProps {
    emiteMovement: (movement:Movement)  => void;
    currentExpenses: number;
    curranteBalance: number;

}