import React from "react";


class FriendForm extends React.Component{

    state = {
        formData:{Title:""
            , Bio:""
            , Summary:""
            , Headline:""
            , Slug:"" 
            , Status:""
            , Skills:""
            , PrimaryImage:""
        },
        // mappedFriends: null
    };
    onChange = event => {
    
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState(prevState => {
    
          const updatedFormData = {
            ...prevState.formData
          };
    
          updatedFormData[name] = value;
    
          return { formData: updatedFormData };
        }, this.stateChanged);
      };

    render(){
        return(
            <React.Fragment>
            <form style={{justifyContent: "center"}}>
            <h2>Add or Edit Friend</h2>
            <div className="form-group col-md-4 p-1">   
                <label className="form-label">Title</label>
                <input type="text" 
                    name="Title"
                    className="form-control" 
                    value={this.state.formData.Title}
                    onChange={this.onChange}
                    placeholder="Dwight Schrute"></input>
            </div>
            <div className="form-group col-md-4 p-1">  
                <label className="form-label">Bio</label>
                <input type="text" 
                    name="Bio"
                    className="form-control" 
                    value={this.state.formData.Bio}
                    onChange={this.onChange}
                    placeholder="This is a bio."></input>
            </div>
            <div className="form-group col-md-4 p-1">   
                <label className="form-label">Summary</label>
                <input type="text" 
                    className="form-control" 
                    name="Summary"  
                    value={this.state.formData.Summary}
                    onChange={this.onChange}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></input>
            </div>
            <div className="form-group col-md-4 p-1"> 
                <label className="form-label">Headline</label>
                <input type="text" 
                    className="form-control" 
                    name="Headline"
                    value={this.state.formData.Headline} 
                    onChange={this.onChange}
                    placeholder="This is a headline."></input>
            </div>
            <div className="form-group col-md-4 p-1"> 
                <label className="form-label">Slug</label>
                <input type="text" 
                    className="form-control" 
                    name="Slug" 
                    value={this.state.formData.Slug} 
                    onChange={this.onChange}
                    placeholder="www.schrutefarms.com"></input>
            </div>
            <div className="form-group col-md-4 p-1">   
                <label className="form-label">Status</label>
                <input type="text" 
                    className="form-control" 
                    name="Status" 
                    value={this.state.formData.Status} 
                    onChange={this.onChange}
                    placeholder="Active"></input>
            </div>
            <div className="form-group col-md-4 p-1">   
                <label className="form-label">Skills</label>
                <input type="text" 
                    className="form-control" 
                    name="Skills" 
                    value={this.state.formData.Skills} 
                    onChange={this.onChange}
                    placeholder=""></input>
            </div>
            <div className="form-group col-md-4 p-1">   
                <label className="form-label">Primary Image</label>
                <input type="text" 
                    className="form-control" 
                    name="PrimaryImage" 
                    value={this.state.formData.PrimaryImage} 
                    onChange={this.onChange}
                    placeholder="url"></input>
            </div>
          
            <div>
              <button type="button" className="btn btn-primary" onClick={this.onAddFriendBtnClick}>Submit</button>
            </div>
            </form>
            </React.Fragment>
        )
    }
    
}

export default FriendForm;