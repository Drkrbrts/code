import React from "react";
import * as userService from "../services/userServices"

class Content extends React.Component {
   
  componentDidMount(){
    let prodId = this.props.match.params.id;
    console.log("componentDidMount",prodId)
    var data = { email: "user@google.com", password: "password" }
            userService.logIn(data)
            .then(this.onActionSuccess)
            .catch(this.onActionError);
        
    if(prodId){
        console.log('Make ajax call for product id', { prodId })
    }
}

// componentDidUpdate(prevProps){
//     let prodId = this.props.match.params.id;
//     console.log("componentDidUpdate",prodId)

//     if(prodId && prevProps.match.params.id !== prodId){
//         console.log('Make ajax call for product id out of componentDidUpdate', { prodId })
//     }
// }  
        
    
    onButtonContent = (e) => {
        // var data = { email: "user@google.com", password: "password" }
        // userService.logIn(data)
        // .then(this.onActionSuccess)
        // .catch(this.onActionError);
        let ticks = new Date().getSeconds()
        this.props.history.push("/content/" + ticks)
        console.log('Content button was clicked', ticks);
    }
        
    onActionSuccess = (response) => {
     // do something
     console.log("successful", response)
    }
    
    onActionError= (errResponse) => {
     // do something
     console.warn({error: errResponse})
    }
    


    render(){
        console.log('rendering content');
        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                      tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Etiam porta sem malesuada
                      magna mollis euismod. Donec sed odio dui.
                    </p>
                    <p>
                      <a className="btn btn-secondary" href="#" role="button"
                        >View details &raquo;</a
                      >
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                      tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Etiam porta sem malesuada
                      magna mollis euismod. Donec sed odio dui.
                    </p>
                    <p>
                      <a className="btn btn-secondary" href="#" role="button"
                        >View details &raquo;</a
                      >
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>
                      Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Vestibulum id ligula porta felis euismod
                      semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                    <p>
                      <a className="btn btn-secondary" href="#" role="button"
                        >View details &raquo;</a
                      >
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-md-4">
                    <button 
                    type="submit"
                    className="btn btn-outline-primary"
                    onClick={this.onButtonContent}> 
                    content
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
export default Content;