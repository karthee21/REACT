import { useState } from "react"
// import React, { Component } from "react";

export function ToDoList() {
    const [data,setData] =useState("")
    
    function handleSubmit(e) {
        setData(e.target.value)
        console.log(data)
    }
    return(
        <>
            <h1>TODOLIST</h1>
            <form>                                                              
                <input type='text' 
                className="form-control" 
                placeholder="ToDoItem"
                onChange={(e)=>{handleSubmit(e)}}
                />
                <p className="text-danger"></p>
                <p className="text-success"></p>

                {/* ////---------//// */}
               
                <button type="submit" className="btn btn-success mt-3" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        
            <div className="To-Do-Items">
                
                <h4>{data}</h4>
                
            </div>
        </>
    )
}

// export class ToDoList extends Component {
//     state={
//         item:""
//     }
//     handleSubmit=(e) => {
//         e.preventDefault();
//         this.setState(e.target.value)
//         console.log(this.state.item);
//     }
//     render(){
//         return(
//             <>
//                 <h1>TODOLIST</h1>
//                 <form >                                                              
//                     <input type='text' 
//                     className="form-control" 
//                     placeholder="ToDoItem"
//                     onChange={(e)=>{this.handleSubmit(e)}}
//                     />
//                     {/* ////---------//// */}
        
//                     <button type="submit" className="btn btn-success mt-3"
//                     onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
//                 </form>
    
//                 <div className="To-Do-Items">
            
//                     <h4>{this.state.item}</h4>
            
//                 </div>
//             </>
//         )
//     }
// }
    
//   export default ToDoList
