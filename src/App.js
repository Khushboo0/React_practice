
import "./App.css";
import { TopNav } from "./myComps/TopNav";
import { ToDoContainer } from "./myComps/ToDoContainer";
import React, { useState } from 'react';
import { Footer } from "./myComps/Footer";
import { AddTodoItem } from "./myComps/AddTodoItem";

function App() {
  const onDel = (arr) => {
    console.log("Delete button clicked!!", arr);
    setTodoArr(todoArr.filter((elem)=> {
      return elem !==arr;
    }))

    //using splice method from js will not work here
  };
  const addTodoItem =(title,desc)=>{
    let sno = todoArr.length+1;
    const localItem={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodoArr([...todoArr,localItem]);
  }
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
      <AddTodoItem addTodoItem={addTodoItem}/>
      <ToDoContainer todoarr={todoArr} onDel={onDel} />
      <Footer/>
    </>
  );
}

export default App;
