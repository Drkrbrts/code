import React from "react"
import 'rc-pagination/assets/index.css'


class Home extends React.Component
{
    


    // onButtonClicked = (e) =>
    // {
    //     e.stopPropagation();
    //     e.preventDefault();

    //     console.log("I was click");
    //     console.log("My name is " + this.state.name)
    // }
    render()
    {
        return (
            <React.Fragment>
                
                    {this.props.isLoggedIn ? 
                      <h1 className = "text-center">Welcome {this.props.name}</h1> : null}
                
                


                {/* <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Hello, world!</h1>
                        <p className="col-md-8 fs-4">
                            This is a template for a simple marketing or informational
                            website. It includes a large callout called a jumbotron and
                            three supporting pieces of content. Use it as a starting point
                            to create something more unique.
                        </p>
                        <p>
                            <button 
                                type= "button" 
                                className="btn btn-primary btn-lg" 
                                onClick= {this.onButtonClicked}
                            >
                                Learn more &raquo;
                            </button>
                        </p>
                    </div>
                </div> */}
            </React.Fragment>
        )

    }
}

export default Home