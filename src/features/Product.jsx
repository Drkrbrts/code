import React from "react";

class Product extends React.Component{

componentDidMount(){
    let prodId = this.props.match.params.productId;
    console.log("componentDidMount",prodId)

    if(prodId){
        console.log('Make ajax call for product id', { prodId })
    }

}

componentDidUpdate(){
    let prodId = this.props.match.params.productId;
    console.log("componentDidUpdate",prodId)

    if(prodId){
        console.log('Make ajax call for product id out of componentDidUpdate', { prodId })
    }


}

render(){
    return <div className="col-md-12">Product</div>
}

}

export default Product