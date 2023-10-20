
import "./App.css";
import { TopNav } from "./myComps/TopNav";
import { ToDoContainer } from "./myComps/ToDoContainer";
import React, { useState } from 'react';
import { Footer } from "./myComps/Footer";

function App() {
  const onDel = (arr) => {
    console.log("Delete button clicked!!", arr);
    setTodoArr(todoArr.filter((elem)=> {
      return elem !==arr;
    }))

    //using splice method from js will not work here
  };
  const [todoArr, setTodoArr] = useState([
    {
      sno: 1,
      title: "list1",
      desc: "desc 1",
    },
    {
      sno: 2,
      title: "list2",
      desc: "desc 2",
    },
    {
      sno: 3,
      title: "list3",
      desc: "desc 3",
    },
  ]);
  return (
    <>
      <TopNav title="test" searchBar={true} />
      <ToDoContainer todoarr={todoArr} onDel={onDel} />
      <Footer/>
    </>
  );
}

export default App;
