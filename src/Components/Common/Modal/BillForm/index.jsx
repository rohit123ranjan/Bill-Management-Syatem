import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { billStack } from "../../../../actions/billStack";
import { eachBudgetData } from "../../../../actions/dashboard";
import { ModalWrapper } from "./style";

const dataStruct = [
  {
    value: "FoodNDining",
    type: "want",
  },
  {
    value: "Utitlity",
    type: "need",
  },
  {
    value: "Shopping",
    type: "want",
  },
  {
    value: "Mortgage",
    type: "need",
  },
  {
    value: "Education",
    type: "need",
  },
  {
    value: "Personal",
    type: "want",
  },
  {
    value: "Travel",
    type: "want",
  },
];

const Index = ({
  billStack,
  setOpenModal,
  currentData,
  monthlyBudget,
  billStackData,
  eachBudgetData,
  setModalChange,
}) => {
  const [state, setState] = useState({
    name: "",
    category: "FoodNDining",
    amount: null,
    date: null,
    description: "",
  });

  const [showError, setShowError] = useState(false);
  const [errorIndex, setErrorIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (currentData?.id) {
      setEditId(currentData?.id);
      setState((prevState) => ({
        ...prevState,
        name: currentData?.name,
        category: currentData?.category,
        amount: currentData?.amount,
        date: currentData?.date,
        description: currentData?.description,
      }));
    }
  }, [currentData]);

  const handleInput = (e, fieldname) => {
    if (fieldname === "amount") {
      let checkNumber = new RegExp("^\\d+$");
      if (checkNumber.test(e.target.value)) {
        setState((prevState) => ({
          ...prevState,
          amount: e.target.value,
        }));
        setShowError(false);
      } else {
        if (e.target.value.length === 0) {
          setState((prevState) => ({
            ...prevState,
            amount: e.target.value,
          }));
        } else {
          const value = e.target.value?.toString();
          setState((prevState) => ({
            ...prevState,
            amount: value?.substring(0, value?.length - 1),
          }));
          setShowError(true);
          setErrorIndex(3);
          setErrorMessage(
            !checkNumber.test(e.target.value) &&
              "Phone number should be number only"
          );
        }
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        [fieldname]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setShowError(true);
      setErrorMessage("Please enter the name");
      setErrorIndex(1);
      return;
    }

    if (!category) {
      setShowError(true);
      setErrorMessage("Please select category");
      setErrorIndex(2);
      return;
    }

    if (!date) {
      setShowError(true);
      setErrorMessage("Please select date");
      setErrorIndex(4);
      return;
    }

    if (!amount) {
      setShowError(true);
      setErrorMessage("Please enter the amount");
      setErrorIndex(3);
      return;
    }

    if (!description) {
      setShowError(true);
      setErrorMessage("Please add description");
      setErrorIndex(5);
      return;
    }

    setShowError(false);
    let type = "need";
    if (amount) {
      const budget = parseInt(monthlyBudget?.budget, 10);
      let totalAmount = 0,
        temStore = {},
        fixed = 0,
        variable = 0,
        save = 0;
      billStackData?.forEach((item) => {
        totalAmount += parseInt(item?.amount, 10);
        dataStruct?.forEach((data) => {
          if (data?.value === item?.category) {
            if (data?.type === "need") {
              fixed += parseInt(item?.amount, 10);
            } else {
              variable += parseInt(item?.amount, 10);
            }
          }
          // eachBudgetData;
        });
      });

      console.log("totalAmount", totalAmount, amount, budget);

      dataStruct?.forEach((data) => {
        if (data?.value === category) {
          type = data?.type;
          if (data?.type === "need") {
            if (editId) {
              const data = billStackData?.filter((i) => i?.id === editId);
              const value = parseInt(data?.[0]?.amount);
              fixed = fixed + (parseInt(amount, 10) - value);
            } else {
              fixed += parseInt(amount, 10);
            }
          } else {
            if (editId) {
              const data = billStackData?.filter((i) => i?.id === editId);
              const value = parseInt(data?.[0]?.amount);
              variable = variable + (parseInt(amount, 10) - value);
            } else {
              variable += parseInt(amount, 10);
            }
          }
        }
        // eachBudgetData;
      });

      if (fixed > budget) {
        confirmAlert({
          title: "Error",
          message: "Fixed expenses must not be more than your budget",
          buttons: [
            {
              label: "Ok",
              onClick: () => {
                return;
              },
            },
          ],
        });
        return;
      } else {
        save = parseInt(budget, 10) - (fixed + variable);
        temStore = {
          fixed,
          variable,
          save,
        };
        eachBudgetData(temStore);
      }
    }

    const payload = {
      id: editId || Math.round(Math.random() * 1898),
      name,
      type,
      category,
      amount,
      date,
      description,
    };

    if (editId) {
      billStack(payload, "edit");
    } else {
      billStack(payload, "append");
    }
    setState((prevState) => ({
      ...prevState,
      name: "",
      category: "FoodNDining",
      amount: "",
      date: "dd/mm/yyyy",
      description: "",
    }));
    setModalChange(true);
    setOpenModal(false);
  };

  const { name, amount, date, category, description } = state;

  return (
    <ModalWrapper>
      {/* <div className="round__icon">
        <Icon icon={plus} size={25} />
      </div> */}
      <div class="modal">
        <span
          class="close"
          onClick={() => {
            setOpenModal(false);
            setModalChange(true);
          }}
        >
          &times;
        </span>
        <form class="budget">
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="Name"
            value={name}
            onChange={(e) => handleInput(e, "name")}
            required
          />
          {showError && errorIndex === 1 && (
            <span className="budget__error">{errorMessage}</span>
          )}
          <h4>Category</h4>
          <select value={category} onChange={(e) => handleInput(e, "category")}>
            <option value="FoodNDining">FoodNDining</option>
            <option value="Utitlity">Utitlity</option>
            <option value="Shopping">Shopping</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Education">Education</option>
            <option value="Personal">Personal Care</option>
            <option value="Travel">Travel</option>
          </select>
          {showError && errorIndex === 2 && (
            <span className="budget__error">{errorMessage}</span>
          )}
          <h4>Amount</h4>
          <input
            type="text"
            placeholder="Enter Amount"
            name="Amount"
            value={amount}
            onChange={(e) => handleInput(e, "amount")}
            required
          />
          {showError && errorIndex === 3 && (
            <span className="budget__error">{errorMessage}</span>
          )}
          <h4>Select Date</h4>
          <input
            type="date"
            placeholder="Select Date"
            name="date"
            value={date}
            onChange={(e) => handleInput(e, "date")}
            required
          />
          {showError && errorIndex === 4 && (
            <span className="budget__error">{errorMessage}</span>
          )}
          <h4>Description</h4>
          <input
            type="text"
            placeholder="Add Description"
            name="description"
            value={description}
            onChange={(e) => handleInput(e, "description")}
            required
          />
          {showError && errorIndex === 5 && (
            <span className="budget__error">{errorMessage}</span>
          )}
          <button
            type="submit"
            class="budget__submit"
            onClick={(e) => handleSubmit(e)}
          >
            Continue
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => {
  const { budget, billstack, dashboard } = state;
  return {
    monthlyBudget: budget?.budgetData?.data,
    billStackData: billstack?.billStack?.data,
    eachBudget: dashboard?.eachBudgetData?.data,
  };
};

export default connect(mapStateToProps, {
  billStack,
  eachBudgetData,
})(Index);
