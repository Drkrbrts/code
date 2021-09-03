import React from 'react'
import { getAllEvents } from '../ajax'
import EventModal from '../components/EventModal'
import SelectedEvent from '../components/SelectedEvent'
import { postEvent } from '../ajax'
import { onRegisterSuccess, onRegisterFailure } from '../successAndFailure'
import { postUpdateEvent } from '../ajax'
import MapModal from '../components/MapModal'




class Events extends React.Component{

    state = {
        eventSelected: null
        ,eventKeys : null
        ,data : null
        ,isOpen : false
        ,isMap : false
        ,formdata : {
            startDate : ''
            ,endDate : ''
            ,zipcode : ''
            ,address : ''
            ,name : ''
            ,headline : ''
            ,description : ''
            ,summary : ''
            ,slug : ''
        }
        ,editmode : null
    }

    componentDidMount(){
        getAllEvents()
            .then((res)=>{
                let events = res.data.item.pagedItems
                console.log(events)
                events.forEach(element => {
                    this.setState(()=>{
                        let newState = {...this.state.eventKeys}
                        newState[element.id] = element
                        return ({eventKeys : newState})
                    })
                });
                this.setState(()=>{
                    return ({data : events})
                })
            })
    }

    bigView = (e) =>{
        let theId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.id
        this.setState(()=>{
            let newState = {...this.state.eventSelected}
            newState = theId
            return ({eventSelected : newState})
        })
    }
    toggleModal = () => {
        this.setState((prevState) => {
          return {
            isOpen: !prevState.isOpen
          };
        });
      };
    toggleMap = () => {
        this.setState((prevState) => {
          return {
            isMap: !prevState.isMap
          };
        });
    };

    editTheEvent = (e) =>{
        let theId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.id
        this.setState(()=>{
            let newState = {...this.state.formdata}
            newState ={
                startDate : this.state.eventKeys[theId].metaData.dateStart.slice(0,10)
                ,endDate : this.state.eventKeys[theId].metaData.dateEnd.slice(0,10)
                ,zipcode : this.state.eventKeys[theId].metaData.location.zipcode
                ,address : this.state.eventKeys[theId].metaData.location.address
                ,name : this.state.eventKeys[theId].name
                ,headline : this.state.eventKeys[theId].headline
                ,description : this.state.eventKeys[theId].description
                ,summary : this.state.eventKeys[theId].summary
                ,slug : this.state.eventKeys[theId].slug
            }
            let otherState ={...this.state.editmode}
            otherState = theId
            return({formdata : newState, editmode : otherState})
        })
        this.toggleModal();
    }

    createNewEvent = (e) =>{
        const payload = {
            metaData : {
                dateStart : `${this.state.formdata.startDate}T18:22:08.444Z`
                ,dateEnd : `${this.state.formdata.endDate}T18:22:08.444Z`
                ,location : {
                    latitude : 0
                    ,longitude : 0
                    ,zipcode : `${this.state.formdata.zipcode}`
                    ,address : `${this.state.formdata.address}`
                }
            }
            ,name : `${this.state.formdata.name}`
            ,headline : `${this.state.formdata.headline}`
            ,description : `${this.state.formdata.description}`
            ,summary : `${this.state.formdata.summary}`
            ,slug : `${this.state.formdata.slug}`
            ,statusId : "Active"
        }
        postEvent(payload)
            .then(onRegisterSuccess)
            .catch(onRegisterFailure)

    }

    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        let inputName = e.currentTarget.name;
        this.setState(()=>{
          let newState = {...this.state.formdata}
          newState[inputName] = newValue;
          
          return {formdata: newState}
        })
    }
    updateEvent = () =>{
        const payload = {
            metaData : {
                dateStart : `${this.state.formdata.startDate}T18:22:08.444Z`
                ,dateEnd : `${this.state.formdata.endDate}T18:22:08.444Z`
                ,location : {
                    latitude : 0
                    ,longitude : 0
                    ,zipcode : `${this.state.formdata.zipcode}`
                    ,address : `${this.state.formdata.address}`
                }
            }
            ,name : `${this.state.formdata.name}`
            ,headline : `${this.state.formdata.headline}`
            ,description : `${this.state.formdata.description}`
            ,summary : `${this.state.formdata.summary}`
            ,slug : `${this.state.formdata.slug}`
            ,statusId : "Active"
        }
        postUpdateEvent(payload,this.state.editmode)
            .then(onRegisterSuccess)
            .catch(onRegisterFailure)
    }

    mappedEvents = (event) =>{
        let startDate = event.metaData.dateStart.slice(0,10)
        let endDate = event.metaData.dateEnd.slice(0,10)
        let myId = event.id

        return (
            <div className="card" key={myId} id={myId}>
                <div className="card-body">
                    <h5 className="card-text">{event.name}</h5>
                    <p className="card-text">{event.metaData.location.address}</p>
                    <p className="card-text">Starting: {startDate}</p>
                    <p className="card-text">Ending: {endDate}</p>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col">
                            <button 
                                className="btn btn-primary"
                                onClick={this.bigView}
                                >View More</button>
                        </div>
                        <div className="col">
                            <button 
                                className="btn btn-primary"
                                onClick={this.editTheEvent}
                                >Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    clickFunction = () =>{
        if (this.state.editmode>0){ return this.updateEvent }else{ return this.createNewEvent}
     }

    render(){

        return(
            <React.Fragment>
               
                <div className="row">

                        <MapModal
                        isMap={this.state.isMap}
                        toggleMap={this.toggleMap}
                        title={"Map"}
                        
                        >

                        </MapModal>

                    
                        <EventModal 
                        isOpen={this.state.isOpen}
                        toggleModal={this.toggleModal}
                        title={"New Event"}
                        data={this.state.data}
                        change={this.onChangeState}
                        clickFunction={this.clickFunction}
                        formvalue={this.state.formdata}
                        editmode={this.state.editmode}
                        
                        >

                        </EventModal>
                    
                    {this.state.data &&(<div className="col">
                        
                        <SelectedEvent 
                            eventSelected={this.state.eventSelected} 
                            eventKeys={this.state.eventKeys}
                            data={this.state.data}>

                        </SelectedEvent>
                    </div>)}
    

                    {this.state.data && (<div className="col card-deck">
                        <div className="card">
                            <div className="row">
                                <div className="col">
                                    <h1 className="card-header">Upcoming Events</h1>
                                </div>
                                <div className="col">
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={this.toggleMap}
                                        >View on Map</button>
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={this.toggleModal}
                                        >New Event</button>
                                </div>
                            </div>
                        </div>

                        {this.state.data.map(this.mappedEvents)}

                    </div>)}

                </div>
            </React.Fragment>
        )
    }
}

export default Events