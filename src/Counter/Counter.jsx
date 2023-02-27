import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const titleTextChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyTextChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="container text-center">
      {counter == 0 ? (
        <span className="fs-4 badge bg-warning text-wrap">Empty</span>
      ) : counter > 0 ? (
        <span className="fs-4 badge bg-primary text-wrap">{counter}</span>
      ) : (
        <span className="fs-4 badge bg-danger text-wrap">
          {" the digit must be positive, not:"} {counter}
        </span>
      )}

      <button className="btn btn-lg btn-primary m-2" onClick={increment}>
        +
      </button>
      <button className="btn btn-lg btn-primary m-2" onClick={decrement}>
        -
      </button>
      <div className="input-group">
        <button className="input-group-text btn btn-success">
          Create new todo
        </button>
        <input
          type="text"
          value={title}
          onChange={titleTextChange}
          className="form-control"
          placeholder="Title"
        />
        <input
          type="text"
          value={body}
          onChange={bodyTextChange}
          className="form-control"
          placeholder="body"
        />
      </div>
      {title !== "" && (
        <div className="border border-success mt-5">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
