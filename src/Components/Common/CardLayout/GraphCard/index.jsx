import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { CardWrapper } from "./style";

const Index = ({ billStackData, monthlyBudget }) => {
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);
  const [highestAmount, setHighestAmount] = useState(null);

  useEffect(() => {
    let date = [],
      amount = [],
      highest = 0;
    billStackData?.forEach((item) => {
      date.push(item?.date);
      amount.push(item?.amount);
      if (parseInt(item?.amount, 10) > highest) {
        highest = parseInt(item?.amount, 10);
      }
    });

    setHighestAmount(highest);
    setAmount(amount);
    setDate(date);
  }, [billStackData]);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Bills for this month",
        data: amount,
        borderColor: ["rgba(105, 16, 180, 0.8)"],
        backgroundColor: ["rgba(55, 06, 255, 0.5)"],
        pointBackgroundColor: ["rgba(55, 06, 255, 0.9)"],
        pointBorderColor: ["rgba(55, 06, 255, 0.9)"],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: highestAmount,
            stepSize: Math.round(highestAmount / 10),
          },
        },
      ],
    },
  };

  return (
    <CardWrapper>
      <h2>Monthly Billed Chart</h2>
      {date?.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "20%",
            color: "#888",
          }}
        >
          No Data
        </h1>
      )}
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  const { billstack, budget } = state;
  return {
    billStackData: billstack?.billStack?.data,
    monthlyBudget: budget?.budgetData?.data,
  };
};

export default connect(mapStateToProps, null)(Index);
