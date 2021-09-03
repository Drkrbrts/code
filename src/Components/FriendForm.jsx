// import { H } from "jest-haste-map";
import React from "react"
import { friendsService } from "../services/friendsService";
// const _logger = debug.extend("App")
// const _loggerPage = _logger.extend("SPA")

class FriendForm extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
           
        };   
    } 

componentDidMount(){
    
}

    // onFormFieldChanged = (e) =>
    // {
    //   let currentTarget = e.currentTarget
    //        let newValue = currentTarget.value
    //        let inputName = currentTarget.name
    
    //        this.setState(()=>{
            
    //         let newState = {} 
    //         newState[inputName] = newValue
    
    //         return newState
    
    //        })

    
    // }
    
    

    
    render(){  
        return(
           <React.Fragment>
           
            
            <h1>Add or edit friends here!</h1>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" 
                id="title-box" 
                placeholder="Mr./Mrs./Dr. (etc)"
                value={this.person}
                name={"title"}
                onChange={this.onFormFieldChanged}
                />
                <label for="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="bio-box" placeholder="Tell me something about yourself"/>
                <label for="floatingInput">Bio</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="summary-box" placeholder="Quick summary"/>
                <label for="floatingInput">Summary</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="headline-box" placeholder="What do you want the headline to say? "/>
                <label for="floatingInput">Headline</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="slug-box" placeholder=" "/>
                <label for="floatingInput">Slug</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="status-box" placeholder="Active"/>
                <label for="floatingInput">Status</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="skills-box" placeholder=" "/>
                <label for="floatingInput">Skills</label>
                </div>
                <div className="form-floating mb-3">
                <input type="url" class="form-control" id="url-box" placeholder="https://yoururl.com"/>
                <label for="floatingInput">Primary image</label>
                </div>
                <input className="btn btn-primary"
                 type="submit"
                value="Submit"
                onClick={this.onItemClicked}  
                  ></input>

            </React.Fragment>



      )
    }
}

export default FriendForm           


