import React from "react";

class Jumbo extends React.Component{
   onButtonJumbo = (e) =>{
    let ticks = new Date().getSeconds()
    this.props.history.push("/jumbo/" + ticks)
    console.log('Jumbo button was clicked', ticks);
}
  
    componentDidMount(){
        let prodId = this.props.match.params.id;
        console.log("componentDidMount",prodId)
    
        if(prodId){
            console.log('Make ajax call for product id', { prodId })
        }
    }
    
    // componentDidUpdate(prevProps){
    //     let prodId = this.props.match.params.id;
    //     console.log("componentDidUpdate",prodId)
    
    //     if(prodId && prevProps.match.params.id !== prodId){
    //         console.log('Make ajax call for product id out of componentDidUpdate', { prodId })
    //     }
    // }

 render(){
  console.log('rendering Jumbo');
     return<React.Fragment>
         <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>
            This is a template for a simple marketing or informational website.
            It includes a large callout called a jumbotron and three supporting
            pieces of content. Use it as a starting point to create something
            more unique.
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a
            >
          </p>
        </div>
      </div>
              <div className="col-md-4">
                    <button 
                    type="submit" 
                    className="btn btn-outline-success" 
                    onClick={this.onButtonJumbo}>
                    Jumbo
                    </button>
                </div>

     </React.Fragment>
 }
}

export default Jumbo