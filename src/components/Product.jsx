import React from "react"

class Product extends React.Component {

    componentDidMount()
    {
        let prodId = this.props.match.params.productId;

        console.log("Product componentDidMount", { prodId });
    };

    componentDidUpdate(preProps)
    {
        let prodId = this.props.match.params.productId;

        console.log("Product componentDidUpdate", { prodId });

        if (prodId && preProps.match.params.productId !== prodId)
        {
            console.log(
                "making an ajax call for product id out of componentDidUpdate", 
                { prodId }
            );
        }
    };

    render() {

        return (
            <div className="col-md-12">Product Content</div>

        );
    }    
};

export default Product;