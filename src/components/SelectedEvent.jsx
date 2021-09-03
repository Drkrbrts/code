import React from 'react'


class SelectedEvent extends React.Component{


    render(){
        if(this.props.eventSelected === null){
            return(   
                <div className="card" id={this.props.data[0].id}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data[0].name}</h5>
                        <p className="card-text">{this.props.data[0].summary}</p>
                        <p className="card-text">{this.props.data[0].description}</p>
                        <div className="row">
                            <div className="col">
                                <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26781.76811899168!2d-115.10164820493772!3d32.95837437871017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d722d02767ba63%3A0x851791a3111edcd8!2sAlgodones%20Dunes!5e0!3m2!1sen!2sus!4v1630536745204!5m2!1sen!2sus" style={{border:0,height:300,width:300}}></iframe>
                            </div>
                            <div className="col">
                                <h5 className="card-title">Location</h5>
                                <p className="card-text">California 92227</p>
                            </div>
                        </div>
                    </div>
                </div>            
            )
        }else if(this.props.eventSelected){
            return(
                <div className="card" id={this.props.eventSelected}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.eventKeys[this.props.eventSelected].name}</h5>
                        <p className="card-text">{this.props.eventKeys[this.props.eventSelected].summary}</p>
                        <p className="card-text">{this.props.eventKeys[this.props.eventSelected].description}</p>
                        <div className="row">
                            <div className="col">
                                <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26781.76811899168!2d-115.10164820493772!3d32.95837437871017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d722d02767ba63%3A0x851791a3111edcd8!2sAlgodones%20Dunes!5e0!3m2!1sen!2sus!4v1630536745204!5m2!1sen!2sus" style={{border:0,height:300,width:300}}></iframe>
                            </div>
                            <div className="col">
                                <h5 className="card-title">Location</h5>
                                <p className="card-text">California 92227</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SelectedEvent