import React from "react"

class Content extends React.Component {

    state = { name: "Sabio", zipcCode: "05854", cost: 5285.5 };

   onButtonClicked = () => 
   // use this. because the function is an arrow function it is attached to the inctance of the component
   // the instance inside of the render
   {
       // plain button
       console.log("Button was clicked", new Date())
   }

   onItemClicked = (e) => 
   {
       e.stopPropagation(); // seperates event handlers from firing when overlapped or within eachothers space. prevents "event bubbling"
       console.log("Item was clicked", e.currentTarget, new Date())
   }

   onSubmitClicked = (e) => 
   {
       e.preventDefault();
       e.stopPropagation();
       console.log("Submit was clicked", e.currentTarget, new Date())
       console.log("here is state ", this.state)
   }

   // CLICK HANDLERS CAN BE USED ON <div><p>... almost any tag!
    render() {

        return (
            <React.Fragment>
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
                        <button 
                        className="btn btn-secondary"
                        onClick={this.onButtonClicked}
                        >
                            Button one &raquo;
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
                        <button 
                        className="btn btn-secondary"
                        onClick={this.onItemClicked}
                        >
                            Button two &raquo;
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
                        <form>
                        <p>
                        <button
                        type="submit"
                        className="btn btn-secondary"
                        onClick={this.onSubmitClicked}>
                            Button Three &raquo;
                        </button>
                        </p>
                        </form>
                    </div>
                   
                    </div>

                    <hr />
                </div>
            </React.Fragment>
        );
    }    
};

export default Content;