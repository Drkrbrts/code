 import React  from "react";
 import debug from "debug";
 const _logger = debug.xtend('inputForm');
 const _cblogger = _logger.extend('callBacks');
 const _loggerState = _logger.extends("State-Updater");



class PersonForm extends React.Component{

    constructor(props){
        super(props);
            _logger('constructor');

            this.state ={
                person: this.propsToFormData(this.props)
            };
            }



    propsToFormData(props){
        if(props.personData && props.personData.id){
            return JSON.parse(JSON.stringify(props.personData));
        }else{
            return {id: "", legalName: "", stageName:""};
        }

    }
stateChanged =() =>{
    _cblogger("state change", this.state);
}

    


onAdd = () => {
    _logger("onAdd");
    this.setState(()=> {
    _loggerState("updater in on Add");
    return{
    formData: {}
    
    };
    }, this.stateChanged);
    
    _logger("onAdd end");
    };
    
    
    
    render(){
    _logger("render with this state", {
    State: this.state
    });
    
    return (
    
<React.Fragment>
    <h3>Basic form</h3>
    <h5>add friend exercise</h5>
    <ul>
    <li>Simple Form</li>
    <li>Controlled Components for Input controls</li>
    <li>Interface to class child component via props</li>
    <li>using key property to recycle person form</li>
    </ul>
    
    <div className="row">
    <div className="col col-sm-6">
    <div className="panel panel-default">
    <div className="panel-heading">
    People&nbsp;
    
    <button type="button"
    className = "btn btn-primary btn-xs pull-right"
    disabled = {this.state.formData=== null ? false: true}
    onClick={this.onAdd}
    >
    Add New Person
    </button>
    </div>
    
    <div className="panel-body">
    <peopleList
    myPeople={this.state.people}
    onPersonClicked={this.onSelectedItemChange}
    />
    </div>
    </div>
    </div>
    
    <div className="col col-sm-6">
    {this.state.formData && (
    <div className="panel panel-default">
    <div className="panel-heading">Create/Edit Person</div>
    <div className="panel-body">
    <PersonForm
    key={this.state.formData.id}
    personData={this.state.formData}
    onDelete={this.onDeleteRequested}
    onSave={this.onSaveRequested}
    onCancel={this.onCancelRequested}
    />
    </div>
    </div>
    )}
    </div> 
    </div>  
</React.Fragment>
    );
    }
    }
    
   
   
   
 export default PersonForm;