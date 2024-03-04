import mail from './mail.module.css'
import number from './number.module.css'
import './posts.css'
 function Textstyle(){
    const tex ={
        text:{
            background: 'lightblue'
        }
    }
    
    return(
        <>
            {/* inline */}
            <h1 style={{color:'red'}}>Instagram</h1>
            
            {/* internal */}
            <h2 style={tex.text}>karthee_21_</h2>

            {/* external */}
            <h3 className={"post"}>32 Posts</h3>
            
            {/* module */}
            <h3 className={mail.contact}>mutyalakarthik6@gmail.com</h3>
            <h3 className={number.contact}>7989823913</h3>
            {/* --------------------- */}
            <botton class='btn btn-success btn-lg border border-primary'>Submit</botton>
        </>
    )
    }
    export default Textstyle