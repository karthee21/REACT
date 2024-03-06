import { Component } from "react";

export class Pagination extends Component{
    state={
        userData:[],
        pageNumber:0
    }
    componentDidMount(){
        this.getuserData()
    }
    getuserData=async ()=>{
        const response=await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
            headers:{
                "app-id":"65e6beafae5e0d6cd9ecd13d"
            }
        })
        const {data}=await response.json()
        this.setState({userData: data})
    }
 componentDidUpdate(prevsProps,prevsState){
    if(prevsState.pageNumber !== this.state.pageNumber){
        this.getuserData()
    }
 }
    handleBtn = (num) => {
        this.setState.apply({pageNumber:num})
    }

render(){
    return(
        <>
           <div>
        <h2>Pagination</h2>
        <div className='container'>
            <div className='row'>
            {
                this.state.userData.length>0 ? 
                (this.state.userData.map((user) => (
                        <div className='col-md-6 my-5'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={user.picture} alt={user.firstName} />
                                </div>
                                <div className='col-md-8'>
                                    <h5>{user.id}</h5>
                                    <p>{user.title} {user.firstName} {user.lastName}</p>
                                </div>
                            </div>
                    </div>
                )) 
                ) : <div class="position-absolute top-50 start-50 translate-middle" role="status">
                        <div role="status">
                          <span class="spinner-grow text-primary" ></span>
                          <span class="spinner-grow text-danger"></span>
                          <span class="spinner-grow text-success"></span>
                        </div>
                    </div>
            }
            </div>
            {
                [1,2,3,4,5,6,7,8,9].map((num)=>(
                    <button className="btn btn-primary mx-2 my-5"
                                onClick={()=>{
                                    this.setState({pageNumber:num})
                                }}> {num}
                    </button>

                ))
            }
        </div>
      </div>
        </>
    )
}
} 