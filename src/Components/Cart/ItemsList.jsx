import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";

import Item from "./Item";

const ItemsList = () => {
  const initialState = [
    { name: "item one", id: 1, value: 1, price: 200 },
    { name: "item two", id: 2, value: 1, price: 290 },
    { name: "item three", id: 3, value: 1, price: 186 },
    { name: "item four", id: 4, value: 1, price: 99 },
    { name: "item five", id: 5, value: 1, price: 76 },
    { name: "item six", id: 6, value: 1, price: 40 },
  ];

  // Стейт товаров
  const [Items, setItems] = useState(initialState);

  // Функция для рендера всех товаров. Будет использоваться внутри JSX
  const renderItems = () => {
    return Items.map((el) => (
      <Item
        key={el.id}
        {...el}
        handleDelete={onDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    ));
  };
  // Увеличить value по нажатию на кнопку "+"
  const handleIncrement = (id) => {
    setItems(
      Items.map((el) => {
        if (el.id == id) {
          el.value += 1;
        }
        return el;
      })
    );
  };
  // Уменьшить value по нажатию на кнопку "-"
  const handleDecrement = (id) => {
    const elemToChange = Items.findIndex((el) => el.id === id);
    const newItems = [...Items];
    newItems[elemToChange].value > 0
      ? newItems[elemToChange].value--
      : (newItems[elemToChange].value = 0);

    setItems(newItems);
  };

  // Ниже будет самовызывающаяся функция. Я не уверен, можно ли так делать?

  // ??
  (() => {
    Items.forEach((el) => {
      if (el.value == 0) {
        setTimeout(() => {
          setItems(Items.filter((el) => el.value !== 0));
        }, 700);
      }
    });
  })();
  // ??
  // Функция для удаления товара со страницы по нажатию кнопки "Delete". Прокинута как handleDelete в Counter
  const onDelete = (id) => {
    setItems(Items.filter((el) => el.id !== id));
  };
  // Рендерит итоговую цену в низу страницы
  const TotalPriceRender = () => {
    let total = Items.reduce((sum, el) => (sum += el.price * el.value), 0);

    return total;
  };

  return (
    <>
      <Table variant="white">
        <tbody>{renderItems()}</tbody>
        {Items.length == 0 ? (
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
    </>
  );
};

export default ItemsList;
