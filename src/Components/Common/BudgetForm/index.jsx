import React, { useState } from "react";
import { connect } from "react-redux";
import { budgetData } from "../../../actions/budget";
import { CardWrapper } from "./style";

const Index = ({ budgetData }) => {
  const [budget, setBudget] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    let checkNumber = new RegExp("^\\d+$");
    if (checkNumber.test(e.target.value)) {
      setBudget(e.target.value);
      setShowError(false);
    } else {
      if (e.target.value.length === 0) setBudget("");
      else {
        const value = e.target.value?.toString();
        setBudget(value?.substring(0, value?.length - 1));
        setShowError(true);
        setErrorMessage(
          !checkNumber.test(e.target.value) &&
            "Phone number should be number only"
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget) {
      const amount = parseInt(budget, 10);
      const fixed = Math.round((amount * 50) / 100);
      const variable = Math.round((amount * 30) / 100);
      const saving = Math.round((amount * 20) / 100);
      const payload = {
        budget,
        fixed,
        variable,
        saving,
      };
      budgetData(payload);
    } else {
      setShowError(true);
      setErrorMessage("Please enter the amount to proceed");
    }
  };

  return (
    <CardWrapper>
      {/* <div className="round__icon">
        <Icon icon={plus} size={25} />
      </div> */}
      <h1>Manage Your Bills</h1>
      <h4>Add Your Monthly Budget</h4>

      <form className="budget">
        <input
          type="text"
          placeholder="Enter Your Amount"
          name="Budget"
          value={budget}
          onChange={(e) => handleInput(e)}
          required
        />
        {showError && <span className="budget__error">{errorMessage}</span>}
        <button
          type="submit"
          class="budget__submit"
          onClick={(e) => handleSubmit(e)}
        >
          Continue
        </button>
      </form>
    </CardWrapper>
  );
};

export default connect(null, {
  budgetData,
})(Index);
