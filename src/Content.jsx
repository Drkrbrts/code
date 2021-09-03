import React from "react"
import 'rc-pagination/assets/index.css'

class Content extends React.Component
{
    onButtonClicked = () =>
    {
        console.log("View details")
    }
    render()
    {
        return (
            <React.Fragment>
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
                        <button type="button" className="btn btn-secondary" onClick={this.onButtonClicked}>
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
                        <button type="button" className="btn btn-secondary" onClick={this.onButtonClicked}>
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
                        <button type="button" className="btn btn-secondary" onClick={this.onButtonClicked}>
                            View details &raquo;
                        </button>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Content;