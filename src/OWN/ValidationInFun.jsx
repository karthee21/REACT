
export function Validation() {
    return(
        <>
            <h2>Form-Validation in function componants</h2>
            <form className="p-5">                                                              
                <input type='text' 
                className="form-control" 
                placeholder="UserName"
                name="userName" 
                // onChange={(e)=>{this.handleChange(e)}}
                />
                {/* <p className="text-danger">{state.userNameErr}</p>
                <p className="text-success">{state.userNamevalid}</p> */}

                {/* ////---------//// */}
                <input type="email" 
                className="form-control my-3" 
                placeholder="e-mail"
                name="email"
                // onChange={(e)=>{this.handleChange(e)}}
                />
                {/* <p className="text-danger">{this.state.emailErr}</p>
                <p className="text-success">{this.state.emailvalid}</p> */}

                {/* /////----------///// */}
                <input type="phonenumber" 
                className="form-control" 
                placeholder="PhoneNumber" 
                name="phoneNumber" 
                // onChange={(e)=>{this.handleChange(e)}}
                />
                {/* <p className="text-danger">{this.state.phoneNumberErr}</p>
                <p className="text-success">{this.state.phonenumbervalid}</p> */}
                    
                {/* ///////----------///// */}
                <button className="btn btn-warning mt-3"
                onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
            </form>
        </>
    )
}
