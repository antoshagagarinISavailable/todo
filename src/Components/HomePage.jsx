import React from "react";
import { CardGroup } from "react-bootstrap";
import AppCard from "./AppCard";
const HomePage = () => {
  return (
    <>
      <div className="container my-3">
        <h3>This is a Home Page</h3>
        <p>List of my tiny App's</p>
      </div>
      <CardGroup>
        <AppCard
          title={"Dating App"}
          description={"desctiption"}
          date={new Date("2023-03-04T12:00:00")}
          link={"/dating"}
        />
        <AppCard
          title={"Cart App"}
          description={"desctiption"}
          date={new Date("2023-03-05T21:46:00")}
          link={"/cart"}
        />
        <AppCard
          title={"Drag and Drop"}
          description={"desctiption"}
          date={new Date("2023-03-11T19:10:00")}
          link={"/dragndrop"}
        />
      </CardGroup>
    </>
  );
};

export default HomePage;
