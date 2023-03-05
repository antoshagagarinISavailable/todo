import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import Counter from "./Counter";

const CountersList = () => {
  const initialState = [
    { name: "item one", id: 1, value: 1 },
    { name: "item two", id: 2, value: 1 },
    { name: "item three", id: 3, value: 1 },
    { name: "item four", id: 4, value: 1 },
    { name: "item five", id: 5, value: 1 },
    { name: "item six", id: 6, value: 1 },
  ];

  const [counters, setCounters] = useState(initialState);

  const renderCounters = () => {
    return counters.map((el) => (
      <Counter
        key={el.id}
        {...el}
        handleDelete={onDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    ));
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((el) => {
        if (el.id == id) {
          el.value += 1;
        }
        return el;
      })
    );
  };

  const handleDecrement = (id) => {
    const elemToChange = counters.findIndex((el) => el.id === id);
    const newCounters = [...counters];
    newCounters[elemToChange].value--;
    setCounters(newCounters);
  };

  const onDelete = (id) => {
    setCounters(counters.filter((el) => el.id !== id));
  };

  return (
    <Table variant="white">
      {/* <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead> */}
      <tbody>{renderCounters()}</tbody>
    </Table>
  );
};

export default CountersList;
