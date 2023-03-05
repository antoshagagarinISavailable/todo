import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";

import Counter from "./Counter";

const CountersList = () => {
  const initialState = [
    { name: "item one", id: 1, value: 1, price: 200 },
    { name: "item two", id: 2, value: 1, price: 290 },
    { name: "item three", id: 3, value: 1, price: 186 },
    { name: "item four", id: 4, value: 1, price: 99 },
    { name: "item five", id: 5, value: 1, price: 76 },
    { name: "item six", id: 6, value: 1, price: 40 },
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
    newCounters[elemToChange].value > 0
      ? newCounters[elemToChange].value--
      : (newCounters[elemToChange].value = 0);
    setCounters(newCounters);
  };

  const onDelete = (id) => {
    setCounters(counters.filter((el) => el.id !== id));
  };

  const TotalPriceRender = () => {
    let total = counters.reduce((sum, el) => (sum += el.price * el.value), 0);

    return total;
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
      {counters.length == 0 ? (
        ""
      ) : (
        <tfoot>
          <tr>
            <td colSpan={4}>
              <h5 className="mx-2">
                {"Total is: "}
                <Badge pill bg="danger">
                  {TotalPriceRender()}
                  {" USD"}
                </Badge>
              </h5>
            </td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

export default CountersList;
