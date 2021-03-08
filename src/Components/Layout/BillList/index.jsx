import React, { useState, useEffect } from "react";
import Icon from "react-icons-kit";
import { edit } from "react-icons-kit/fa/edit";
import { ic_delete_forever } from "react-icons-kit/md/ic_delete_forever";
import { billStack } from "../../../actions/billStack";
import { connect } from "react-redux";
import Modal from "../../Common/Modal/BillForm";
import { eachBudgetData } from "../../../actions/dashboard";
import { Wrapper } from "./style";

const Index = ({
  billStack,
  billStackData,
  monthlyBudget,
  setModalChange,
  modalChange,
  eachBudgetData,
  eachBudget,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [category, setCategory] = useState("");
  const [stackData, setStackData] = useState([]);

  const runList = (stack, target) => {
    let tempStore = [],
      total = 0;
    stack?.forEach((item) => {
      // console.log("data", item);
      if (item?.type === "need") {
        total += parseInt(item?.amount, 10);
        tempStore.push({ ...item, color: true });
      }
    });
    // console.log("total 1", total);
    stack?.forEach((item) => {
      if (item?.type !== "need") {
        const budget = parseInt(monthlyBudget?.budget, 10);
        // console.log("total2-", total, parseInt(item?.amount, 10));
        if (total + parseInt(item?.amount, 10) > budget) {
          tempStore.push({ ...item, color: false });
        } else {
          total += parseInt(item?.amount, 10);
          tempStore.push({ ...item, color: true });
        }
      }
    });

    if (target) {
      const data = tempStore?.filter((i) => i.category == target);
      setStackData(data);
      setModalChange(false);
      return;
    }
    // console.log("total----", total);
    setStackData(tempStore);
    setModalChange(false);
  };

  useEffect(() => {
    if (billStackData?.length > 0) {
      runList(billStackData);
    } else {
      setStackData([]);
    }
  }, [billStackData, modalChange]);

  const handleDelete = (item) => {
    billStack(item, "delete");
    const temStore = {
      fixed:
        item?.type === "need"
          ? eachBudget?.fixed - parseInt(item?.amount, 10)
          : eachBudget?.fixed,
      variable:
        item?.type === "want"
          ? eachBudget?.variable - parseInt(item?.amount, 10)
          : eachBudget?.variable,
      save: eachBudget?.save + parseInt(item?.amount, 10),
    };
    eachBudgetData(temStore);
  };

  const handleInput = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "All") {
      runList(billStackData);
      return;
    }
    runList(billStackData, e.target.value);
  };

  return (
    <Wrapper>
      <h2>
        Bill Details
        <span className="subtext">
          <span className="dot"></span>
          Blue highlighted color bills should be paid, such that their total
          value does not exceed the monthly budget.
        </span>
      </h2>
      <div className="category">
        <h3>Filter:</h3>
        <select value={category} onChange={(e) => handleInput(e)}>
          <option value="All">All</option>
          <option value="FoodNDining">FoodNDining</option>
          <option value="Utitlity">Utitlity</option>
          <option value="Shopping">Shopping</option>
          <option value="Mortgage">Mortgage</option>
          <option value="Education">Education</option>
          <option value="Personal">Personal Care</option>
          <option value="Travel">Travel</option>
        </select>
      </div>

      <div className="table">
        <table className="table__box">
          <tr className="table__header">
            <th>Date</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
          {stackData?.map((item) => (
            <tr
              style={{
                backgroundColor: item?.color ? "#6486ff" : "#ffffff",
                color: item?.color ? "white" : "#1b1d29",
              }}
              key={item?.id}
              className="table_list"
            >
              <td>{item?.date}</td>
              <td>{item?.name}</td>
              <td>{item?.category}</td>
              <td>{item?.description}</td>
              <td>{item?.amount}</td>
              <td className="action__icon">
                <span>
                  <Icon
                    onClick={() => {
                      setOpenModal(true);
                      setCurrentData(item);
                      setStackData(billStackData);
                      setCategory("All");
                    }}
                    style={{
                      color: item?.color ? "#192a3e" : "rgb(251 86 72)",
                    }}
                    icon={edit}
                    size={25}
                  />
                </span>
                <span>
                  <Icon
                    onClick={() => handleDelete(item)}
                    style={{
                      color: item?.color ? "#192a3e" : "rgb(251 86 72)",
                    }}
                    icon={ic_delete_forever}
                    size={25}
                  />
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {openModal && (
        <Modal
          currentData={currentData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setModalChange={setModalChange}
        />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  const { billstack, budget, dashboard } = state;
  return {
    billStackData: billstack?.billStack?.data,
    monthlyBudget: budget?.budgetData?.data,
    eachBudget: dashboard?.eachBudgetData?.data,
  };
};

export default connect(mapStateToProps, {
  billStack,
  eachBudgetData,
})(Index);
