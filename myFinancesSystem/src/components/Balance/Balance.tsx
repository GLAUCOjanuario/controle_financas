import { useState } from "react";
import { BalanceProps } from "../../models/interfaces/BalanceProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css";
import Button from "../Button/Button";

const Balance = ({ emitMovement, currentBalance }: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const toggleInputForm = () => setRenderInputForm(!renderInputForm);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    hideInputForm();
    emitMovement({
      name: inputName,
      value: inputValue,
      type: "Input",
    });
  };

  const handleInputNameForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;
    setInputName(eventValue);
    setIsFormValid(eventValue.trim().length > 0 && inputValue.trim().length > 0);
  };

  const handleInputValueForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;
    setInputValue(eventValue);
    setIsFormValid(inputName.trim().length > 0 && eventValue.trim().length > 0);
  };

  return (
    <div>
      <div className="balance_container">
        <div className="balance_card">
          <header className="balance_header">
            <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
            <h2>Saldo</h2>
          </header>
          <h3>{currentBalance > 0 ? `R$ ${currentBalance}` : "R$ 0"}</h3>
          {!renderInputForm && (
            <Button
              action={toggleInputForm}
              title="Entrada"
              priority="Input"
            />
          )}
          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div className={`input_form_container ${!isFormValid ? "invalid" : ""}`}>
                <input
                  type="text"
                  placeholder="Nome"
                  className="balance_input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className="balance_input"
                  value={inputValue}
                  onChange={handleInputValueForm}
                />
              </div>
              <div className="actions_form_buttons_container">
                <Button
                  title="Cancelar"
                  priority="Output"
                  action={hideInputForm}
                 
                />
                  <Button
                  title="Adicionar"
                  priority="Input"
                 type="submit"
                 
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
