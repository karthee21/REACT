import React, { Component } from 'react'

export default class Mounting extends Component{
    // constructor(){
    //     super()
    // }
    state ={
        usersData:[]
    }
    
    // static getDerivedStateFromProps(props, state){

    // }
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
            <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                
                    {this.state.usersData.length>0 ? (this.state.usersData.map((user)=>(
                        <tr key ={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                    </tr>
               ))) : <div class="position-absolute top-50 start-50 translate-middle" role="status">
                         <span className="spinner-border text-success"></span>
                     </div>
             }
            </table>
        </>
    )
}
}