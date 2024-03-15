import React from "react";
import { Route , Routes } from "react-router-dom";
import PractiesHome from "./PractiesHome";
import { Validation } from "./ValidationInFun";
import TodoList from "./ToDoList";
// ------------------------------
const Practies =() =>{
        return(
            <>
                <Routes>
                    <Route path="/PractiesHome" element={<PractiesHome/>}/>
                    <Route path="/ToDoList" element={<TodoList/>}/>
                    <Route path="/validation" element={<Validation/>}/>
                </Routes>
            </>
        )
}
export default Practies