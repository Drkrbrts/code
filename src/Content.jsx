import React, { Component } from "react";

class Content extends Component{
    // state = {
    //     firstName: "Amy",
    //     lastName: "Cashbaugh"
    // };
 
  /*  onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        // console.log({ newValue, currentTarget });
        let inputName = currentTarget.name; //will hold firstName or lastName 

        this.setState(() => {
            let newState = {};
            newState[inputName] = newValue; //using bracket notation to change variables
            // newState.firstName = newValue;
            console.log("newState", newState.firstName);
            return newState;
        });
    };
    */
    
    //Blue >> id for blue >> 1
    //Yellow >> id for blue >> 2
    //Red >> id for blue >> 3
    //    state = {
    //        formData: {
    //            firstName: "Amy"
    //            , lastName: "Cashbaugh"
    //            , email: ""
    //         //    , color: "Blue",
    //            , color: 0
    //            ,agree: true,
    //        },
    //     isModalOpen: false,
    //     hadMadeAjax: true,
    //     arrayOfComp: [],
    // };

    //  onFormFieldChanged = (e) => {
    //     let currentTarget = e.currentTarget;
    //     // let newValue = currentTarget.value;
        
    //     let newValue = currentTarget.type ==="checkbox"? currentTarget.checked : currentTarget.value; //toggles the checked box to true or false
        
    //     let inputName = currentTarget.name; 

    //     this.setState(() => {
    //         // let newState = {...this.state.formData};
    //         // newState[inputName] = newValue; 
    //         // return { formData: newState };

    //          let formData = {...this.state.formData};
    //          formData[inputName] = newValue; 
    //         return { formData };
    //     });
    // };
    
onButtonClicked = (e) => {
        // e.stopPropagation(); //used for any kind of event from bubbling
        e.preventDefault(); //used for a SUBMIT button
        console.log('I was clicked :)');
    }


    render() {
        return (
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-4 p-5">
            //             <form>
            //                 <div className="form-group">
            //                     <label htmlFor="exampleInputEmail1">First Name</label>
            //                     {/* <input type="text" className="form-control" id="firstName" name="firstName" onChange={this.onFormFieldChanged} value={this.state.firstName} /> */}
            //                     <input type="text"
            //                         className="form-control"
            //                         id="firstName"
            //                         name="firstName"
            //                         onChange={this.onFormFieldChanged}
            //                         value={this.state.formData.firstName} />

            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="exampleInputEmail1">Last Name</label>
            //                     {/* <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.onFormFieldChanged} value={this.state.lastName} /> */}
            //                     <input type="text"
            //                         className="form-control"
            //                         id="lastName"
            //                         name="lastName"
            //                         onChange={this.onFormFieldChanged}
            //                         value={this.state.formData.lastName} />

            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="exampleInputEmail1">Email</label>
            //                     <input type="email"
            //                         className="form-control"
            //                         name="email"
            //                         onChange={this.onFormFieldChanged}
            //                         value={this.state.formData.email} />

            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="exampleFormControlSelect1">Favorite Color</label>
            //                     <select className="form-control"
            //                         name="color"
            //                         onChange={this.onFormFieldChanged}
            //                         value={this.state.formData.color} >
            //                         <option>Select Color</option>
            //                         <option value="1">Blue</option>
            //                         <option value="2">Yellow</option>
            //                         <option value="3">Red</option>
            //                     </select>
            //                 </div>
            //                 <div className="form-check">
            //                     <input
            //                         className="form-check-input"
            //                         type="checkbox"
            //                         name="agree"
            //                         checked ={this.state.formData.agree}
            //                         onChange={this.onFormFieldChanged}
            //                         value="999"
            //                     />
            //                     <label
            //                         className="form-check-label"
            //                         htmlFor="defaultCheck1">
            //                         Agree to terms?
            //                     </label>
            //                 </div>
            //                 <button type="submit" className="btn btn-primary">Submit</button>
            //             </form>
            //         </div>
            //     </div>
            //    <hr />
            // </div>




            
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
                            <button type='button' className="btn btn-primary" onClick={this.onButtonClicked}>
                                Click Me &raquo;
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
        );
    };
};

export default Content;