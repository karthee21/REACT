import React, { Component } from 'react'

export class LifeCycleMethods extends Component{
    // constructor(){
    //     super()
    // }
    state ={
        usersData:[]
    }
    
    static getDerivedStateFromProps(props, state){

    }
    componentDidMount(){
        this.getUsersdata()
    }
    getUsersdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({usersData:data})
    }
render(){
    return(
        <>
            <h2>LifeCycleMethod</h2>
        </>
    )
}
}

export default LifeCycleMethods