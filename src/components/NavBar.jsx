
import React from "react"
import { amILoggedIn } from "../ajax"
import { loggingOutGet } from "../ajax"



class NavBar extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            currentUser : {
                isLoggedIn : false
                ,name : ''
                ,id : ''
            }
        };
    }

    componentDidMount(){
        let myUser = {...this.state.currentuser}
        amILoggedIn()
        .then((res)=>{
            myUser.isLoggedIn = true
            myUser.name = res.data.item.name
            myUser.id = res.data.item.id
            this.setState({currentUser: myUser})
        })

    }
    
    logMeOut = (e)=>{
        let myUser = {...this.state.currentuser}
        loggingOutGet()
            .then(()=>{
                myUser.isLoggedIn = false
                myUser.name = ''
                myUser.id = ''
                this.setState({currentUser: myUser})
            })
        this.props.history.push("/Home")
    }

    onRegistrationBtnClick = (e)=>{
          this.props.history.push("/Register")
    }
    onLoginBtnClick =  (e) =>{
        this.props.history.push("/LogIn")
    }
    onHomeBtnClick = (e)=>{
        this.props.history.push("/Home")
    }
    onFriendsBtnClick= (e)=>{
        this.props.history.push("/Friends")
    }
    onCodeChallegeBtnClick =(e)=>{
        this.props.history.push("/Codechallege")
    }




    render(){
        if(this.state.currentUser.isLoggedIn===true){
            return(
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3">
                    <div className="container">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <h5 className="usernameTitle" 
                                style={{color: "whitesmoke"}}
                                >{this.state.currentUser.name}</h5>
                            </li>
                        </ul>
            
                        <button className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse"              
                                data-bs-target="#navmenu"
                        >
            
                        <span className="navbar-toggler-icon"></span>
            
                        </button>
            
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onCodeChallegeBtnClick}
                                        >Code Challege</button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onHomeBtnClick}
                                    >Home</button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onFriendsBtnClick}
                                    >Friends</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-secondary" >Tech companies</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-secondary" >Jobs</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-secondary" >Events</button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-danger"
                                        onClick={this.logMeOut} 
                                    >Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return(
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3">
                    <div className="container">
                        <button className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse"              
                                data-bs-target="#navmenu"
                        >
            
                        <span className="navbar-toggler-icon"></span>
            
                        </button>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onHomeBtnClick}
                                    >Home</button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onRegistrationBtnClick}
                                    >Registration</button>    
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={this.onLoginBtnClick}
                                    >Login</button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            )
        }
    }
}

export default NavBar