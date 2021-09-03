import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as productService from "../../services/productService";

class Product extends React.Component {
    render() {
        

        const onProductSubmit = () => {
            const data = {};

            productService.newProduct(data)
            .then(onNewProductSuccess)
            .catch(onNewProductError);
        }

        const onNewProductSuccess = (response) => {
             toast("Product created")
           }

        const onNewProductError= (errResponse) => {
            toast("Product creation unsuccessful")
           } 
        return (
            <div>
      <form>
        <h1>Product Information</h1>
        <label>Name:</label>
        <input type="text" name="Name" id="name" />
        <br />
        <label>Manufacturer:</label>
        <input type="text" name="Manufacturer" id="manufacturer" />
        <br />
        <label>Description:</label>
        <input type="text" name="Description" id="description" />
        <br />
        <label>Cost:</label>
        <input type="number" name="Cost" id="cost" />
        <br />
        <input type="submit" onClick={onProductSubmit} />
        <div>
        <ToastContainer/>
        </div>
      </form>
    </div>

        )
    }
}

export default Product;