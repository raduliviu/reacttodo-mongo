import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import TasksWrapper from "./TasksWrapper";


const element = (
  <div>
    <Header />
    <TasksWrapper />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
