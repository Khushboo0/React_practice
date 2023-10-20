import React from "react";
import { ToDoItrm } from "./ToDoItrm";

export const ToDoContainer = (props) => {
  return (
    <div className="container">
      <h2 className="text-center">List container</h2>
      <br />
      {props.todoarr.length?
      props.todoarr.map((item) => {
        return <ToDoItrm arr={item} key={item.sno} onDel={props.onDel}/>;
      }):'No items available'}
    </div>
  );
};
