import React from "react";

class PageTwo extends React.Component{

    componentDidMount(){
        let prodId = this.props.match.params.id;
        console.log("componentDidMount",prodId)
    
        if(prodId){
            console.log('Make ajax call for product id', { prodId })
        }
    
    }
    
    componentDidUpdate(prevProps){
        let prodId = this.props.match.params.id;
        console.log("componentDidUpdate",prodId)
    
        if(prodId && prevProps.match.params.id !== prodId){
            console.log('Make ajax call for product id out of componentDidUpdate', { prodId })
        }
    
    
    }

render(){
    
    return <div className="col-md-12">Page Two</div>
}

}

export default PageTwo