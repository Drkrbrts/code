import React from "react";


import {BrowserRouter, Route, NavLink} from "react-router-dom"

import ViewDetails from "./ViewDetails"

import 'rc-pagination/assets/index.css'


class ContentMessage extends React.Component {

    onViewDetailsOneClicked = () => {
        let ticks = new Date().getSeconds();
        console.log('onViewDetailsOneClicked was clicked', ticks);
    }

    onViewDetailsTwoClicked = () => {
        console.log('onViewDetailsTwoClicked was clicked', new Date());
    }

    onViewDetailsThreeClicked = () => {
        let seconds = new Date().getSeconds();
        console.log('onViewDetailsTwoClicked was clicked', seconds);
    }
   

    render() {
        console.log("Content is rendering")
        return (
            <BrowserRouter>
                <div className="container">
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
                                <NavLink to="/detailsOne"> <button onClick={this.onViewDetailsOneClicked} className="btn btn-secondary">
                                View details &raquo; </button> </NavLink> </p>
                            <p>
                                <Route path="/detailsOne" component={ViewDetails}></Route>
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
                                <NavLink to="/detailsTwo"> <button onClick={this.onViewDetailsTwoClicked} className="btn btn-secondary"> 
                                    View details &raquo; 
                                </button> </NavLink>
                            </p>
                            <p>
                                <Route path="/detailsTwo" component={ViewDetails}></Route>
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
                                <NavLink to="detailsThree"><button onClick={this.onViewDetailsThreeClicked} className="btn btn-secondary">
                                    View details &raquo;
                                </button></NavLink> </p>
                                <p>
                                <Route path="/detailsThree" component={ViewDetails}></Route>
                            </p>
                        </div>
                    </div>

                    <hr />
                </div>
            </BrowserRouter>
        )
    }
}

export default ContentMessage;