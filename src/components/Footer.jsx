import React from "react";

class Footer extends React.Component{
    onButtonFooter = (e) =>{
        let ticks = new Date().getSeconds()
        this.props.history.push("/footer/" + ticks)
        console.log('Site nav button was clicked', ticks);
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
    console.log('rendering footer');
     return <React.Fragment>
         <footer className="container"><p>&copy; Company 2017-2018</p></footer>
         <div className="col-md-4">
                    <button 
                    type="submit" 
                    className="btn btn-outline-warning" 
                    onClick={this.onButtonFooter}>
                    Footer
                    </button>
                </div>
     </React.Fragment>
 }
}

export default Footer