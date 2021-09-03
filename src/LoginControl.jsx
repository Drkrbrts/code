import React from "react"
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeeting";

// class LoginControl extends React.Component{
//     render(){
//         return(
//             <React.Fragment>

//             </React.Fragment>
//         )
//     }
// }

function LoginCoutrol(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserGreeting />
    }
    return <GuestGreeting/>
}

export default LoginCoutrol;