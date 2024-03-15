// import React, { Component } from "react";
import { useState,useEffect } from "react"

export default function ToDoList() {
    const [todoList,setTodolist] =useState([])
    const [editIndex, setEditIndex] = useState(null);
    const data = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        const value = e.target.elements.todo.value
        setTodolist([...todoList, value]);
        e.target.reset();
    }
    const handleEdit = (index) => {
        setEditIndex(...editIndex,index);
      };
    // const handleDelete = (idToDelete) => {
    //     setTodolist(todoList.filter(todo => todo.index !== idToDelete));
    // }
    const handleDelete = (idToDelete) => {
        setTodolist(todoList.filter((_ , index) => index !== idToDelete));
      };
      useEffect(()=>{
        data.current.focus()
    })
    return(
        <>
            <h1>TODOLIST</h1>
            <form onSubmit={handleSubmit}>                                                              
                <input type='text' 
                ref={data}
                className="form-control" 
                name='todo'
                placeholder="ToDoItem"
                // onChange={(e)=>{handleSubmit(e)}}
                />
                <p className="text-danger"></p>
                <p className="text-success"></p>

            {/* ////----------------------//// */}
               
                <button type="submit" className="btn btn-success mt-3" >Submit</button>
            </form>
        
            <div className="To-Do-Items ">  
            {todoList.map((todo, index) => (
                <h4 key={index} className="border border-light border-2 d-flex justify-content-end ">{todo}
                    <div class="btn-group mx-3" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-success" onClick={() => handleEdit(index)}>Edit</button>
                        <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                </h4>
            ))}
            </div>
        </>
    )
}
