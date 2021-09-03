import React from "react"
import { postFriendFormData } from "../ajax"
import { onFriendFormSuccess } from "../successAndFailure"


class FriendForm extends React.Component{
    

    constructor(props){
        super(props)
        this.state = this.props
    }
    

    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        let inputName = e.currentTarget.name;
        this.setState(()=>{
          let newState = {...this.state.data}
          newState[inputName] = newValue;
          
          return {data: newState}
        })
      }

      onSubmitBtnClick = (e) =>{
        e.preventDefault();

        const payload ={
            title: this.state.data.title
            ,bio: this.state.data.bio
            ,summary: this.state.data.summary
            ,headline: this.state.data.headline
            ,slug: this.state.data.slug
            ,statusId: this.state.data.statusId
            ,primaryImage: this.state.data.primaryImage
           }
           console.log(payload)

           postFriendFormData(payload)
                .then(onFriendFormSuccess)
                
      }


    render(){
        return <form className="container form-box" style={{height : 700, width : 300}}>
        <div className="form-group">
            <input 
                className="title" 
                name="title" 
                placeholder="Whats there Name?" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.title}
            />
        </div>
        <div className="form-group">
            <input className="bio" 
                name="bio" 
                placeholder="This is a bio" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.bio}
            />
        </div>
        <div className="form-group">
            <input 
                className="summary" 
                name="summary" 
                placeholder="Summary" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.summary}
            />
        </div>
        <div className="form-group">
            <input 
                className="headline" 
                name="headline" 
                placeholder="headline" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.headline}
            />
        </div>
        <div className="form-group">
            <input 
                className="slug" 
                name="slug" 
                placeholder="slug" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.slug}
            />
        </div>
        <div className="form-group">
            <input 
                className="statusId" 
                name="statusId" 
                placeholder="status" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.statusId}
            />
        </div>
        <div className="form-group">
            <input 
                className="primaryImage" 
                name="primaryImage" 
                placeholder="primaryImage" 
                type="text" 
                onChange={this.onChangeState}
                value={this.state.primaryImage}
            />
        </div>
        <button 
            className="btn" 
            type="submit"
            onClick={this.onSubmitBtnClick}
        >Submit</button>
    </form>
    }

}


export default FriendForm