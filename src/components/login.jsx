import React from "react";




class userLogin extends React.Component {
    render() {


        return <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={this.onFormSubmitted}>
            <input
                type="email"
                className="form-control form-control-dark"
                placeholder="email"
                aria-label="Search"
                ref={this.login}
            />

            <input
                type="password"
                className="form-control form-control-dark"
                placeholder="password"
                aria-label="Search"
                ref={this.login}
            />


        </form>





    }


}




export default userLogin;