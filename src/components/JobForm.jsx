import React from 'react'
import {postNewJob} from '../ajax'
import { postJobUpdate } from '../ajax'
import { getAllCompanies } from '../ajax'
import { getTheOneJob } from '../ajax'


class JobForm extends React.Component{

    state ={
        companies : [],
        jobSubmitted : {
            submitted : false
            ,id : ''
        },
        data : {
            title : ''
            ,description : ''
            ,summary : ''
            ,pay : ''
            ,slug : ''
            ,statusId : ''
            ,techCompanyId : ''
            ,skills : ''
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

        const payload ={
            title: this.state.data.title
            ,description: this.state.data.description
            ,summary: this.state.data.summary
            ,pay: this.state.data.pay
            ,slug: this.state.data.slug
            ,statusId: this.state.data.statusId
            ,techCompanyId: this.state.data.techCompanyId
            ,skills: [this.state.data.skills]
           }

           postNewJob(payload)
            .then((res)=>{
                let theId = res.data.item
                this.setState(()=>{
                    let newState = {...this.state.jobSubmitted}
                    newState.submitted = true
                    newState.id = theId
                    return ({jobSubmitted : newState})
                })
            })
                           
      }

        onSubmitBtnClickPost = (e) =>{
            e.preventDefault();

            const payload ={
                id : this.state.jobSubmitted.id
                ,title: this.state.data.title
                ,description: this.state.data.description
                ,summary: this.state.data.summary
                ,pay: this.state.data.pay
                ,slug: this.state.data.slug
                ,statusId: this.state.data.statusId
                ,techCompanyId: this.state.data.techCompanyId
                ,skills: this.state.data.skills
            }

            postJobUpdate(payload,this.state.jobSubmitted.id)


      }

    componentDidMount(){
        getAllCompanies()
            .then((res=>{
                let companies = res.data.item.pagedItems.map((company)=>{
                    return ({name : company.name, id : company.id})
                })
                this.setState({companies})
            }))
        if(this.props.match.params.id){
            getTheOneJob(this.props.match.params.id)
                .then((res)=>{
                    let editJob = res.data.item
                    console.log(editJob)
                    this.setState(()=>{
                        let jobSubmitted = {...this.state.jobSubmitted}
                        let data = {...this.state.data}
                        jobSubmitted = {
                            id : this.props.match.params.id
                            ,submitted : true
                        }
                        data = {
                            title : editJob.title
                            ,description : editJob.description
                            ,summary : editJob.summary
                            ,pay : editJob.pay
                            ,slug : editJob.lsug
                            ,statusId : editJob.statusId
                            ,techCompanyId : editJob.techCompany.id
                            ,skills : editJob.skills[0].name
                        }
                        return ({jobSubmitted,data})
                    })
                })            
        }
        
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
                    value={this.state.data.title}
                />
            </div>
            <div className="form-group">
                <input className="description" 
                    name="description" 
                    placeholder="This is a description" 
                    type="text" 
                    onChange={this.onChangeState}
                    value={this.state.data.description}
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
                    className="pay" 
                    name="pay" 
                    placeholder="pay" 
                    type="text" 
                    onChange={this.onChangeState}
                    value={this.state.data.pay}
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
            <select 
            className="form-select" 
            aria-label="Default select example"
            name="techCompanyId"
            onChange={this.onChangeState}>

                {this.state.companies.map((company)=>{
                    return <option 
                        key={company.id} 
                        value={company.id}
                        >{company.name}</option>
                })}

            </select>
            <div className="form-group">
                <input 
                    className="skills" 
                    name="skills" 
                    placeholder="skills" 
                    type="text" 
                    onChange={this.onChangeState}
                    value={this.state.data.skills}
                />
            </div>

                {this.state.jobSubmitted.submitted === false &&(<button 
                className="btn" 
                type="submit"
                onClick={this.onSubmitBtnClick}
            >Submit</button>)}

                {this.state.jobSubmitted.submitted === true &&(<button 
                className="btn" 
                type="submit"
                onClick={this.onSubmitBtnClickPost}
            >Submit</button>)}


        </form>
    }
}

export default JobForm