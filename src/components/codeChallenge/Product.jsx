import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Product extends React.Component {
    render() {
        const notify = () => toast("Entity created");

        return (
            <div>
      <form
        action="https://api.remotebootcamp.dev/api/entities/Products"
        method="POST"
      >
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
        <input type="submit" onClick={notify} />
        <div>
        <ToastContainer/>
        </div>
      </form>
    </div>

        )
    }
}

export default Product;