import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardWrapper } from "./style";
import { flash } from "react-icons-kit/fa/flash";
import Icon from "react-icons-kit";
import COLORS from "../../../../lib/colors";

const Index = ({ monthlyBudget, eachBudget, modalChange, billStackData }) => {
  const [budget, setBudget] = useState(null);
  const [fixedExpense, setFixedExpense] = useState(null);
  const [variableExpense, setVariableExpense] = useState(null);
  const [savings, setSavings] = useState(null);

  const [currentFixed, setCurrentFixed] = useState(0);
  const [currentVariable, setCurrentVariable] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);

  useEffect(() => {
    setBudget(monthlyBudget?.budget);
    setFixedExpense(monthlyBudget?.fixed);
    setVariableExpense(monthlyBudget?.variable);
    setSavings(monthlyBudget?.saving);
  }, [monthlyBudget]);

  useEffect(() => {
    let fixed = 0,
      variable = 0,
      saving = 0;
    if (eachBudget?.fixed) {
      if (monthlyBudget?.fixed < eachBudget?.fixed) fixed = 100;
      else fixed = (eachBudget?.fixed / monthlyBudget?.fixed) * 100;
    }
    if (eachBudget?.variable) {
      if (monthlyBudget?.variable < eachBudget?.variable) variable = 100;
      else variable = (eachBudget?.variable / monthlyBudget?.variable) * 100;
    }
    if (eachBudget?.save) {
      if (monthlyBudget?.saving < eachBudget?.save) saving = 100;
      else saving = (eachBudget?.save / monthlyBudget?.saving) * 100;

      if (eachBudget?.save < 0) {
        saving = 0;
      }
    }
    setCurrentFixed(fixed);
    setCurrentVariable(variable);
    setCurrentSaving(saving);
  }, [eachBudget, modalChange, monthlyBudget]);

  return (
    <CardWrapper>
      <h3>Your Monthly Budget</h3>
      <p className="price">Rs. {budget}</p>

      <div className="progress">
        {/* <h5>Your fixed expenses should not exceed Rs. 16000</h5> */}
        <h5>Fixed Expenses (Rs. {fixedExpense})</h5>
        <div className="progress__bar">
          <span
            style={{ backgroundColor: `${COLORS.GRAY}` }}
            className="bar bar__fixed"
          >
            <span
              style={{
                width: `${currentFixed}%`,
                height: "100%",
                backgroundColor: `${COLORS.GREEN}`,
              }}
            >
              {eachBudget?.fixed > fixedExpense && (
                <div className="warning">
                  <Icon icon={flash} size={34} />
                  <p>Out&nbsp;of&nbsp;Limit</p>
                </div>
              )}
            </span>
          </span>
          <span style={{ color: `${COLORS.GREEN}` }}>
            Current Value: &nbsp; Rs. {eachBudget?.fixed || 0}
          </span>
        </div>
        {/* <h5>Your variable expenses should not exceed Rs. 10000</h5> */}
        <h5>Variable Expenses (Rs. {variableExpense})</h5>
        <div className="progress__bar">
          <span
            style={{ backgroundColor: `${COLORS.GRAY}` }}
            className="bar bar__variable"
          >
            <span
              style={{
                width: `${currentVariable}%`,
                height: "100%",
                backgroundColor: `${COLORS.RED}`,
              }}
            >
              {eachBudget?.variable > variableExpense && (
                <div className="warning">
                  <Icon icon={flash} size={34} />
                  <p>Out&nbsp;of&nbsp;Limit</p>
                </div>
              )}
            </span>
          </span>
          <span style={{ color: `${COLORS.RED}` }}>
            Current Value: &nbsp; Rs. {eachBudget?.variable || 0}
          </span>
        </div>
        {/* <h5>Your saving should not be less than Rs. 4000</h5> */}
        <h5>Saving (Rs. {savings})</h5>
        <div className="progress__bar">
          <span
            style={{ backgroundColor: `${COLORS.GRAY}` }}
            className="bar bar__save"
          >
            <span
              style={{
                width: `${currentSaving}%`,
                height: "100%",
                backgroundColor: `${COLORS.YELLOW}`,
              }}
            ></span>
          </span>
          <span style={{ color: `${COLORS.YELLOW}` }}>
            Current Value: &nbsp; Rs. {eachBudget?.save || 0}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  const { budget, dashboard, billstack } = state;
  return {
    billStackData: billstack?.billStack?.data,
    monthlyBudget: budget?.budgetData?.data,
    eachBudget: dashboard?.eachBudgetData?.data,
  };
};

export default connect(mapStateToProps, null)(Index);
