import "./App.css";
import { TopNav } from "./myComps/TopNav";
import { ToDoContainer } from "./myComps/ToDoContainer";
import React, { useEffect, useState } from "react";
import { Footer } from "./myComps/Footer";
import { AddTodoItem } from "./myComps/AddTodoItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./myComps/About";

function App() {
  let initTodoList = [];
  if (localStorage.getItem("todolist") === null) {
    initTodoList = [];
  } else {
    initTodoList = JSON.parse(localStorage.getItem("todolist"));
  }
  const onDel = (arr) => {
    console.log("Delete button clicked!!", arr);
    setTodoArr(
      todoArr.filter((elem) => {
        return elem !== arr;
      })
    );

    //using splice method from js will not work here
  };
  const addTodoItem = (title, desc) => {
    let sno = todoArr.length + 1;
    const localItem = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodoArr([...todoArr, localItem]);
  };
  const [todoArr, setTodoArr] = useState(initTodoList);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <Router>
      <TopNav  searchBar={true} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddTodoItem addTodoItem={addTodoItem} />
              <ToDoContainer todoarr={todoArr} onDel={onDel} />
            </>
          }
        ></Route>
        <Route exact path="/about" element={<About />}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
