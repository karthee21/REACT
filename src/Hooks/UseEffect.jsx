import React, { useState , useEffect } from "react";

 const UseEffectPagination = () => {
    const [userData,setUserData] = useState([])
    const [pageNumber,setPageNumber] = useState(0)

    useEffect(()=>{
        getuserData()
    },[pageNumber])
     const getuserData=async ()=>{
        const response=await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
            method:'GET',
            headers:{
                "app-id":"65e6beafae5e0d6cd9ecd13d"
            }
        })
        const {data}=await response.json()
        setUserData(data)
    }
    return(
        <>
            <h1>USE-EFFECT IN FUNCTION COMPONENT</h1>
            <div className='container'>
            <div className='row'>
            {userData&&userData.length>0 ? 
                (userData.map((user) => (
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
                ))) : <div class="position-absolute top-50 start-50 translate-middle" role="status">
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
                        onClick={()=>{setPageNumber(num)}}
                    > {num}
                    </button>
                ))
            }
        </div>
        </>
    )
}
export default UseEffectPagination