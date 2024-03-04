import {Component} from "react"  

 class Counter extends Component{

state= {
    count:0
}
handleIncrement = () =>{
    this.setState({count:this.state.count +1})
}    
handleDecrement = () =>{
    this.setState({count:this.state.count -1})
}    
reset = () =>{
    this.setState({count:this.state.count * 0})
}    

        render(){
         return(
            <div className="App">
                <h1>counter</h1>
                <h5>count:{this.state.count}</h5>
                <button className="btn btn-success"onClick={this.handleIncrement}>Increment</button> 
                <button className="btn btn-danger mx-3"onClick={this.handleDecrement}>Decrement</button> 
                <button className="btn btn-primary"onClick={this.reset}>Reset</button> 
            </div>
        )

         }    
}
export default Counter


