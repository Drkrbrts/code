import React from "react";

class Jumbo extends React.Component
{
    render(){
        return (
            <React.Fragment>
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
                            <button className="btn btn-primary btn-lg">
                                Learn more &raquo;
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
      
            </React.Fragment>
        );
    }
}

export default Jumbo;

    // const onBtnClicked = function ()
    // {
    //     props.onClick();
    // }

    // state = {
    //     name:"Sabio"
    //     , zipCode:"0534"
    //     , cost: 543.5
    // };

    // onItemClicked = (e) =>
    // {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   console.log("i was clicked", e.currentTarget);
    // }
    //   console.log("here is state", this.state.zipCode)
    //   console.log("here is state", this.state)

                        //     {/* <form>
                        // <div 
                        //     className="bg-info" 
                        //     onClick={this.onItemClicked}
                        // >
                        //     <button 
                        //     type="submit" 
                        //     className="btn btn-primary btn-lg" 
                        //     onClick={this.onItemClicked}
                        //     >
                        //     Click Me
                        //     </button>
                        //     <p onClick={this.onItemClicked} className="p-3">I am a p tag</p>
                        // </div>
                        // </form> */}

