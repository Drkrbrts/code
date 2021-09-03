import React from "react";



class HomePage extends React.Component {

    render() {
        return (

            <React.Fragment>
                <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         
            
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                        <button href="#" className="nav-link px-2 text-white link-button">Home</button>
                        </li>
                        <li>
                        <button href="#"className="nav-link px-2 text-white link-button">People</button>
                        </li>
                        <li>
                        <button href="#" className="nav-link px-2 text-white link-button">Blogs</button>
                        </li>
                        <li>
                        <button href="#" className="nav-link px-2 text-white link-button">Tech Co.</button>
                        </li>
                        <li>
                        <button href="#" className="nav-link px-2 text-white link-button">Jobs</button>
                        </li>
                        <li>
                        <button href="#" className="nav-link px-2 text-white link-button">Events</button>
                        </li>
                    </ul>

                    <div className="text-end">
                        <button type="button" className="btn btn-danger me-2">Login</button>
                        <button type="button" className="btn btn-danger">Register</button>
                    </div>
                    </div>
                </div>
                </header>

                <h1>Welcome Sabio Fellow</h1>

            </React.Fragment>


        );
    }

}








export default HomePage;