import React from "react"
import * as userService from "../services/userService";



class Content extends React.Component {
     onItemClicked = (e) => {  
        // e.preventDefault()
        // e.stopPropogation()
        console.log("I was clicked", e.currentTarget)

        // const data = {
        //     "firstName": "Test",
        //     "lastName": "Person",
        //     "email": "testemail@yahoo.com",
        //     "password": "PassWord1!",
        //     "passwordConfirm": "PassWord1!",
        //     "avatarUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fau.whales.org%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F06%2Fhumpback-whale-vanessa-mignon.jpg&f=1&nofb=1",
        //     "tenantId": "123456789"
        //   }
        
        // userService.registerUser(data).then(this.onActionSuccess).catch(this.onActionError)


    
    }
    // onActionSuccess = response => {
    //     console.log({response: response.data})
    // };

    // onActionError = response => {
    //     console.warn({response: response.data})
    // }


    render() {



        return (
        
 
            
            
            
            
            
            
            
             <div className="row">
                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris condimentum
                        nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                        malesuada magna mollis euismod. Donec sed odio dui.
                    </p>
                    <p>
                        <button className="btn btn-secondary">
                            View details &raquo;
                        </button>
                    </p>
                </div>
                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris condimentum
                        nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                        malesuada magna mollis euismod. Donec sed odio dui.
                    </p>
                    <p>
                        <button className="btn btn-secondary another-btn" onClick={this.onItemClicked}>
                            View details &raquo;
                        </button>
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
                        <button type="button" className="btn btn-secondary" onClick={this.onItemClicked}>
                            New Button
                        </button>

                    </p>
                </div>
 

            <hr />
        </div>
        )

    };
};

export default Content
