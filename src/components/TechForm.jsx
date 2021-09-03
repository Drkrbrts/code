import React from 'react'
import { postNewTechCompany } from '../ajax'
import { onLoginFailure } from '../successAndFailure'
import { getTheOneTechCompany } from '../ajax'

class TechForm extends React.Component{

    state = {
        data : {
            name: "",
            profile: "",
            summary: "",
            headline: "",
            contactInformation: "",
            slug: "",
            statusId: "",
            images: "",
            urls: "",
            tags: "",
            friendIds: 0
        }
    }

    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        let inputName = e.currentTarget.name;
        this.setState(()=>{
          let newState = {...this.state.data}
          newState[inputName] = newValue;
          
          return {data : newState}
        })
    }

    onSubmitBtnClick = (e) =>{
        e.preventDefault();

        const payload = {
            name: this.state.data.name,
            profile: this.state.data.profile,
            summary: this.state.data.summary,
            headline: this.state.data.headline,
            contactInformation: this.state.data.contactInformation,
            slug: this.state.data.slug,
            statusId: this.state.data.statusId,
            images: [{imageTypeId : 0,imageUrl : this.state.data.images}],
            urls: [this.state.data.urls],
            tags: ["none"],
            friendIds: 0
        }
        postNewTechCompany(payload)
            .then((res)=>{
                this.props.history.push("/TechCompanies")
            })
            .catch(onLoginFailure)
    }

    componentDidMount(){
        if(this.props.match.params.id){
            getTheOneTechCompany(this.props.match.params.id)
                .then((res)=>{
                    let theCompany = res.data.item;
                    console.log(theCompany)
                    this.setState(()=>{
                        let newState = {...this.state.data};
                        newState = {
                            name: theCompany.name,
                            profile: theCompany.profile,
                            summary: theCompany.summary,
                            headline: theCompany.headline,
                            contactInformation: theCompany.contactInformation.data,
                            slug: theCompany.slug,
                            statusId: theCompany.statusId,
                            images: theCompany.images[0].imageUrl,
                            urls: theCompany.urls[0].url,
                            tags: "",
                            friendIds: 0
                        }
                        return ({data : newState})
                    })
                })
        }
    }


    render(){
        return (
            <form className="container form-box" style={{height : 770, width : 300}}>
                <div className="form-group">
                    <input 
                        className="name" 
                        name="name" 
                        placeholder="Name?" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.name}
                    />
                </div>
                <div className="form-group">
                    <input className="profile" 
                        name="profile" 
                        placeholder="profile" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.profile}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="summary" 
                        name="summary" 
                        placeholder="Summary" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.summary}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="headline" 
                        name="headline" 
                        placeholder="headline" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.headline}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="contactInformation" 
                        name="contactInformation" 
                        placeholder="contactInformation" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.contactInformation}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="slug" 
                        name="slug" 
                        placeholder="slug" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.slug}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="statusId" 
                        name="statusId" 
                        placeholder="status" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.statusId}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="images" 
                        name="images" 
                        placeholder="images" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.images}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="urls" 
                        name="urls" 
                        placeholder="homePage url" 
                        type="text" 
                        onChange={this.onChangeState}
                        value={this.state.data.urls}
                    />
                </div>
                <button 
                    className="btn" 
                    type="submit"
                    onClick={this.onSubmitBtnClick}
                >Submit</button>
            </form>
        )
    }
}

export default TechForm