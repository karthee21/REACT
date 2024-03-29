import React from "react";
import { Route , Routes } from "react-router-dom";
//---------------------------//
import Textstyle from '../styles-in-react/Textstyle'; 
import { Home } from "./Home";
import Table from '../list&keys/table';
import Counter from "../list&keys/botton";
import Form from "../Form-validation/validation";
import Mounting from "../LifeCycleMethod/Mounting"
import { Pagination } from "../LifeCycleMethod/Pagination";
import { CounterF } from "../Hooks/UseState";
import UseEffectPagination from "../Hooks/UseEffect";
import UseReducerHook from "../Hooks/usereducerhook";
import UseRefHook from "../Hooks/UseRefHook";
const Routing = () => {
    return(
        <>
        <Routes>
            <Route path="/Textstyle" element= {<Textstyle/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Table" element={<Table/>}/>
            <Route path="/Bottons" element={<Counter/>}/>
            <Route path="/Form" element={<Form/>}/>
            <Route path="/Mounting" element={<Mounting/>}/>
            <Route path="/pagination" element={<Pagination/>}/>
            <Route path="/UseState" element={<CounterF/>}/>
            <Route path="/UseEffect" element={<UseEffectPagination/>}/>
            <Route path="/UseReducerHook" element={<UseReducerHook/>}/>
            <Route path="/UseRefHook" element={<UseRefHook/>}/>
        </Routes>
        </>
    )

}
export default Routing