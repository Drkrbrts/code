import React from "react"
import * as userService from "../../services/userService";




class Widget extends React.Component {


//   state = {
//     formData: { InputWidget: ""
//                , InputManufacturer: ""
//                , InputDescription: "" 
//                , InputCost: ""
//   }
// };
  

//   onChange = event => {
//     // console.log(event)
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState(prevState => {
//       const updatedFormData = {
//         ...prevState.formData
//       };
//       updatedFormData[name] = value;
//       return { formData: updatedFormData };
//     }, this.stateChanged);
//   };
  



//   onSubmitWidgetClicked = (data) =>{
//     console.log("Widget Created!")

//     var formData = {
//       Name: "Widget Weather",
//       Manufacturer: "WidgetWizards",
//       Description: "Widget Weather lets you monitor the weather of a preferred location",
//       Cost: 20,
//     }

//     userService.post(formData)
//     .then(this.onActionSuccess)
//     .catch(this.onActionError);
//   }

// onActionSuccess = (response) => {
//    console.log("Widget Submitted!") //toasty
// }

// onActionError= (errResponse) => {
//   console.log("Error!") //toasty
// }




//     render() {
//         return  <form>

//         <font size="+4">
//         Create a Widget!
//         </font>

//         <div className="mb-3">
//           <label htmlFor="exampleName" className="form-label">Widget Name</label>
//           <input 
//           type="text" 
//           className="form-control" 
//           name="InputWidget"
//           id="InputWidget"
//           value={this.state.formData.Name} 
//           onChange={this.onChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleLastName" className="form-label">Manufacturer</label>
//           <input 
//           type="text"
//           className="form-control" 
//           name="InputManufacturer"
//           id="InputManufacturer" 
//           value={this.state.formData.Manufacturer} 
//           onChange={this.onChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail" className="form-label">Description</label>
//           <input 
//           type="text" 
//           className="form-control" 
//           name="InputDescription"
//           id="InputDescription" 
//           value={this.state.formData.Description} 
//           onChange={this.onChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Cost</label>
//           <input 
//           type="number" 
//           className="form-control" 
//           name="InputCost"
//           id="InputCost" 
//           value={this.state.formData.Cost} 
//           onChange={this.onChange}
//           />
//         </div>
//         <div>
//         <button 
//             type="button" 
//             className="btn btn-primary"
//             style={{float: 'left'}}
//             onClick={this.onSubmitWidgetClicked}
//             onChange={this.onChange}
//             >
//             Submit Widget
//             </button>
//           </div>

//           <br></br>
//           <br></br>
          
          
//       </form>
      
//     }
}

export default Widget;

