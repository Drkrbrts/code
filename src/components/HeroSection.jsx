import React from "react";






class HeroSection extends React.Component {

    onButtonClicked = () => {
        console.log("Hello world!");
    };

    render() {

        return <main role="main">
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Hello, world!</h1>
                        <p className="col-md-8 fs-4">
                            This is a template for a simple marketing or informational
                            website. It includes a large callout called a jumbotron and
                            three supporting pieces of content. Use it as a starting point
                            to create something more unique.
                        </p>
                        <p>
                            <button className="btn btn-primary btn-lg" onClick={this.onButtonClicked}>
                                Click Me! &raquo;
                            </button>
                        </p>
                    </div>
                </div>
            </div>
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
                            <button className="btn btn-secondary">
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
                            <button className="btn btn-secondary">
                                View details &raquo;
                            </button>
                        </p>
                    </div>
                </div>

                <hr />
            </div>
        </main>


    }




}








export default HeroSection;

