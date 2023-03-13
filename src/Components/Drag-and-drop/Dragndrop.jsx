import { React, useState } from "react";
import s from "./dragndrop.module.css";

const Dragndrop = () => {
  const [cards, setCards] = useState([
    { id: 1, order: 1, text: "один один один" },
    { id: 2, order: 4, text: "два два два" },
    { id: 3, order: 3, text: "три три три" },
    { id: 4, order: 2, text: "четыре четыре" },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  const classSetter = (el) => {
    switch (el) {
      case 1:
        return s.card1;
      case 2:
        return s.card2;
      case 3:
        return s.card3;
      case 4:
        return s.card4;
    }
  };

  const dragStartHandler = (e, el) => {
    setCurrentCard(el);
  };

  const dragEndHandler = (e) => {
    e.target.style.borderColor = "#eee";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.borderColor = "tomato";
  };

  const dropHandler = (e, el) => {
    e.preventDefault();
    e.target.style.borderColor = "#eee";
    setCards([
      ...cards.map((c) => {
        if (c.id === el.id) {
          return { ...c, order: currentCard.order };
        } else if (c.id === currentCard.id) {
          return { ...c, order: el.order };
        } else return c;
      }),
    ]);
  };

  // const cardSort = (a, b) => {
  //   // if (a.order > b.order) {
  //   //   return 1;
  //   // } else {
  //   //   return -1;
  //   // }
  //   return a.order > b.order ? 1 : -1;
  // };

  return (
    <div className={s.container}>
      {cards
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((el) => (
          <div
            key={el.id}
            className={`${s.card} ${classSetter(el.id)}`}
            draggable="true"
            onDragStart={(e) => dragStartHandler(e, el)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, el)}
          >
            {el.text}
          </div>
        ))}
    </div>
  );
};

export default Dragndrop;
