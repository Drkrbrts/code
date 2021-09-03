import React from "react"; 

class Buttons extends React.Component {

    onRequestDetails = (e) => {
        //ticks simulate product id
        let ticks = new Date().getSeconds(); 
        console.log("onRequestDetails was clicked", ticks);
        this.props.history.push("/products/" + ticks)
    };

    onBuyClicked = (e) => {
        let seconds = new Date().getSeconds(); 
        console.log("onBuyClicked was clicked", seconds);
        this.props.history.push("/cart/"); 
    }; 

    onLogOutClicked = () => {
        console.log("onLogOutClicked", new Date());
        this.props.history.push("/"); 
        //root folder 
    }; 


    componentDidUpdate(prevProps) {
        let currentPath = this.props.location.pathname; 
        let previousPath = prevProps.location.pathname; 

        console.log("buttons", { currentPath, previousPath });
    }



    render() {
        console.log("rendering buttons");
        return (
            <React.Fragment>
                <div className="col-md-4 ">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    onClick={this.onBuyClicked}>
                      Buy Product
                  </button>
                </div>

                <div className="col-md-4 ">
                    <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={this.onLogOutClicked}>
                        Log Out 
                    </button>
                </div>

                <div className="col-md-4 ">
                    <button type="submit" 
                    className="btn btn-outline-secondary"
                    onClick={this.onRequestDetails}>
                        See Product Details
                    </button>
                </div>
            </React.Fragment>
        ); 
    }
}; 

export default Buttons; 




    //Note: the following code snippet is used in conjuction with a working "userService.js" page that must first be imported 
    // onLogOutClicked = () => {
    //     console.log("onLogOutClicked", new Date());
    //     userService.logout().then(this.onLogOutSuccess).catch(this.onLogOutError); 
    // }; 

    // onLogOutSuccess = () => {
    //     console.log("onLogOutSuccess we are logged out", new Date());
    //     this.props.history.push("/"); 
    // }
    // onLogOutError = (err) => {
    //     console.log(err);
    // }
