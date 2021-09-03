import React from "react";
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import HomeButton from "./HomeButton";
import {Route} from "react-router-dom";
import FriendsButton from "./FriendsButton";
import EventsButton from "./EventsButton";
import JobsButton from "./JobsButton";
import Logout from "./Logout";



class EventForm extends React.Component {

    state = {
        selectDate: new Date()
    }
 
    onDateChange = (date) => {                                             
        this.setState(() => {
            let selectDate = {...this.state.selectDate};
            selectDate = date;
            return {selectDate};
        })
    }

    render() {

        return <React.Fragment>

<header className="p-3 bg-info bg-gradient text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Route path="/" >
                <HomeButton {...this.props} ></HomeButton>
              </Route>
             <Route path="/" {...this.props} component={EventsButton} />
             <Route path="/" component={FriendsButton} />
              <li>
                <button                                                               
                  href="#"          
                  className="nav-link px-2 text-white link-button"
                >
                  Blogs
                </button>
              </li>
              
              <Route path="/" component={JobsButton} />   
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Events
                </button>
              </li>
                <Route path="/"  component={Logout} />

            </ul>                                              
          </div>  

      </header> 

<div className="calendarApp mt-5">
                <form onSubmit={this.formSubmit} >
                    <div className="input-group mb-3">
                        <DatePicker
                        className="form-control"
                        selected={this.state.selectDate}
                        onChange={this.onDateChange}
                        name="selectDate"
                        showTimeSelect
                        timeIntervals={30}
                        timeFormat="HH:mm"
                        timeCaption="time"
                        dateFormat="MM/dd/yyyy"
                        />
                        
                    </div>
                    

                </form>
            </div>

        </React.Fragment>
    }
}




export default EventForm;