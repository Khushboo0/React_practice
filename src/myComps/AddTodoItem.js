import React, { useState } from "react";

export const AddTodoItem = ({addTodoItem}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const submit = (event)=>{
        event.preventDefault();
        if(!title || !desc){
            alert('Title or decription cant be empty')
        }
        else{
            addTodoItem(title,desc)
        }
    }
  return (
    <div >
        <h3>Add a todo item</h3>
      <form className="container" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(event)=>{setTitle(event.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="title"
            placeholder="Please enter title"
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(event)=>{setDesc(event.target.value)}}
            className="form-control"
            id="desc"
            placeholder="Please enter description"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
