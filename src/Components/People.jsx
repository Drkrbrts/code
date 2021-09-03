import React from "react"
import * as userService from "../services/userService";



class Content extends React.Component {
     onItemClicked = (e) => {  
        // e.preventDefault()
        // e.stopPropogation()
        console.log("I was clicked", e.currentTarget)

    }

    render() {



        return (
            <h1>This will be the People Page </h1>
        )

    };
};

export default Content
