import React from 'react'
import { putEditThePerson } from '../ajax'
import { getPersonById } from '../ajax'

class EditFriendForm extends React.Component{
    state = {
        person : ''
    }

    editEntry = (e) =>{
        let theKey = e.currentTarget.parentElement.parentElement.id
        theKey = theKey.toString()
        putEditThePerson(theKey)
    }

    componentDidMount(){
        getPersonById(this.props.match.params.id)
            .then((res)=>{
                let person = res.data.item
                this.setState({person})
                console.log(this.state.person)
                
            })
    }
    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        let inputName = e.currentTarget.name;
        this.setState(()=>{
          let newState = {...this.state.person}
          newState[inputName] = newValue;
          
          return {person: newState}
        })
      }
      onSubmitBtnClick = (e) =>{
        e.preventDefault();

        const payload ={
            title: this.state.person.title
            ,bio: this.state.person.bio
            ,summary: this.state.person.summary
            ,headline: this.state.person.headline
            ,slug: this.state.person.slug
            ,statusId: this.state.person.statusId
            ,primaryImage: this.state.person.primaryImage.imageUrl
           }
           console.log(payload)

           putEditThePerson(payload,this.props.match.params.id)
                .then((res)=>{this.props.history.push("/Friends")})
      }

    render(){
        return  (<form className="container form-box" style={{height : 700, width : 300}}>
           {this.state.person && (<React.Fragment>
            <div className="form-group">
                    <input 
                        className="title" 
                        name="title" 
                        placeholder="Whats there Name?" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.title}
                    />
                </div>
                <div className="form-group">
                    <input className="bio" 
                        name="bio" 
                        placeholder="This is a bio" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.bio}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="summary" 
                        name="summary" 
                        placeholder="Summary" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.summary}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="headline" 
                        name="headline" 
                        placeholder="headline" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.headline}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="slug" 
                        name="slug" 
                        placeholder="slug" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.slug}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="statusId" 
                        name="statusId" 
                        placeholder="status" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.statusId}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="primaryImage" 
                        name="primaryImage" 
                        placeholder="primaryImage" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.person.primaryImage.imageUrl}
                    />
                </div>
                <button 
                    className="btn" 
                    type="submit"
                    onClick={this.onSubmitBtnClick}
                >Edit</button>
                </React.Fragment>)}
        </form>)
    }
    
}


export default EditFriendForm