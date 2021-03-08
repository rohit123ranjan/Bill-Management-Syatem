import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../../Components/Layout/Header/index";
import BudgetForm from "../../Components/Common/BudgetForm";
import GraphCard from "../../Components/Common/CardLayout/GraphCard";
import AddCard from "../../Components/Common/CardLayout/AddCard/index";
import ProgressCard from "../../Components/Common/CardLayout/ProgressCard/index";
import BillList from "../../Components/Layout/BillList";

import { eachBudgetData } from "../../actions/dashboard";

import { Wrapper, Container } from "./style";

const Index = ({ monthlyBudget }) => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [modalChange, setModalChange] = useState(false);

  useEffect(() => {
    if (monthlyBudget && monthlyBudget?.budget) {
      setOpenDashboard(true);
    }
  }, [monthlyBudget]);

  return (
    <Wrapper>
      {openDashboard ? (
        <>
          <Header />
          <Container>
            <section>
              <div className="row">
                <div>
                  <AddCard setModalChange={setModalChange} />
                  <div
                    style={{
                      margin: "20px 0 0 20px",
                    }}
                  >
                    <h3>AS PER 50/30/20 RULE</h3>
                    <div>
                      <span className="text">
                        Fixed expenses should be Rs.{monthlyBudget?.fixed}.
                        Fixed expenses are Utility, Education, Mortgage.
                      </span>
                    </div>
                    <div>
                      <span className="text">
                        Variable expenses should be Rs.
                        {monthlyBudget?.variable}. Variable expenses are
                        FoodNDining, Shopping, Personal Care, Travel.
                      </span>
                    </div>
                    <div>
                      <span className="text">
                        Your savings should be Rs.{monthlyBudget?.saving}.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col__card">
                  <GraphCard />
                  <ProgressCard modalChange={modalChange} />
                </div>
              </div>
              <div className="list__bills">
                <BillList
                  modalChange={modalChange}
                  setModalChange={setModalChange}
                />
              </div>
            </section>
            <footer>
              Created by Rohit Ranjan. Mobile No: &nbsp;<span>6283661876</span>.
              Email:&nbsp;
              <span> rohit2020official@gmail.com</span>
            </footer>
          </Container>
        </>
      ) : (
        <div className="budget__wrapper">
          <BudgetForm />
        </div>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  const { budget } = state;
  return {
    monthlyBudget: budget?.budgetData?.data,
  };
};

export default connect(mapStateToProps, {
  eachBudgetData,
})(Index);
