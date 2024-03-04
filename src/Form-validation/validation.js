import React, { Component } from "react";

export class Form extends Component {
    
    state = {
        userName:"",
        email:"",
        phoneNumber:'',
        userNameErr:"",
        emailErr : '',
        phoneNumberErr : "",
    }
handleChange = (e)=>{
const {name,value} = e.target
this.setState({[name]:value})
console.log(this.state)
  
}

handleSubmit=(e) => {
    e.preventDefault();
    this.hadleValidation();
}
hadleValidation= () =>{
    let userNameErr ="";
    let emailErr = "";
    let phoneNumberErr = "";
    let userNamevalid = "";
    let emailvalid = "";
    let phonenumbervalid = "";

    // console.log('this.state.userName.length ---' , this.state.userName.length)

    if(this.state.userName.length < 4){
        userNameErr = "Minimum 4 character Required..."
        this.setState({userNameErr})
        userNamevalid = ""
        this.setState({userNamevalid})
    }
    else{
        userNameErr = ""
        this.setState({userNameErr})
        userNamevalid = "name valid"
        this.setState({userNamevalid})
    }
    //////////----------------//////
    if(!this.state.email.includes("@")){
        emailErr = "Enter valid Email"
        this.setState({emailErr})
        emailvalid = ""
        this.setState({emailvalid})
    }
    else{
        emailErr = ""
        this.setState({emailErr})
        emailvalid = "Email valid"
        this.setState({emailvalid})

    }
    ///////--------------------/////
    console.log(this.state.phoneNumber.length)
    if(this.state.phoneNumber.length !==10){
        phoneNumberErr = "Enter valid Phone number"
        this.setState({phoneNumberErr})
        phonenumbervalid = ""
        this.setState({phonenumbervalid})
        console.log(this.setState({}))
    }
    else{
        phoneNumberErr = ""
        this.setState({phoneNumberErr})
        phonenumbervalid = "PhoneNumber valid"
        this.setState({phonenumbervalid})
    }
//console.log('this.state.userNameErr 11111111', this.state.userNameErr);
    // if(userNameErr||emailErr||phoneNumberErr){
    //     this.setState({userNameErr,emailErr,phoneNumberErr})
    // }else{
    //     this.setState({userNameErr,emailErr,phoneNumberErr})
    // }
}

    render() {
        return (
            <>
                <h2 className="App">Inputs</h2>
                <form className="App">
                                                                                        
                    <input type='text' 
                    className="form-control" 
                    placeholder="UserName"
                    name="userName" 
                    onChange={(e)=>{this.handleChange(e)}}/>
                    <p className="text-danger">{this.state.userNameErr}</p>
                    <p className="text-success">{this.state.userNamevalid}</p>

                    {/* ////---------//// */}
                    <input type="email" 
                    className="form-control my-3" 
                    placeholder="e-mail"
                    name="email"
                    onChange={(e)=>{this.handleChange(e)}}
                    />
                    <p className="text-danger">{this.state.emailErr}</p>
                    <p className="text-success">{this.state.emailvalid}</p>


                    {/* /////----------///// */}
                    <input type="phonenumber" 
                    className="form-control" 
                    placeholder="PhoneNumber" 
                    name="phonenumber" 
                    onChange={(e)=>{this.handleChange(e)}}
                    />
                    <p className="text-danger">{this.state.phoneNumberErr}</p>
                    <p className="text-success">{this.state.phonenumbervalid}</p>
                    
                    {/* ///////----------///// */}
                    <button className="btn btn-success mt-3"
                    onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
                </form>
            </>
        )
    }
}

export default Form