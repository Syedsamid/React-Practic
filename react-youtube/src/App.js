import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "school Fee",
      amount: 250,
      date: new Date(2019, 6, 30),
    },
    {
      id: "e2",
      title: "Books",
      amount: 220,
      date: new Date(2025, 1, 30),
    },
    {
      id: "e3",
      title: "Tution Fee",
      amount: 500,
      date: new Date(2022, 7, 22),
    },
    {
      id: "e4",
      title: "collage Fee",
      amount: 25000,
      date: new Date(2024, 6, 12),
    },
  ];

  return (
    <>
      <div>
        <h2>Hi samid</h2>
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
       date={expenses[1].date}
       title={expenses[1].title}
       amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
       date={expenses[2].date}
       title={expenses[2].title}
       amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
       date={expenses[3].date}
       title={expenses[3].title}
       amount={expenses[3].amount}
        ></ExpenseItem>
      </div>
    </>
  );
}

export default App;
