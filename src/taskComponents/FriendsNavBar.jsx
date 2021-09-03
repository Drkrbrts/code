import React from "react"

class FriendsNavBar extends React.Component {

    onAddFriendClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onAddFriendClicked was clicked",seconds)
        this.props.history.push("/Friends/AddFriend")
    }

    render() {

        return (
        <React.Fragment>

                <header className="p-1 bg-secondary text-dark">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  
                        <h2 className="text-light">Friends</h2>
                        <div>              
                        <button 
                        type="button"
                        onClick={this.onAddFriendClicked} 
                        className="btn btn-outline-light me-2 margin-l"
                        >
                        +Friend
                        </button>
                        </div> 
                    </div>

                    

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                        type="search"
                        className="form-control form-control-dark"
                        placeholder="Search..."
                        aria-label="Search"
                        />
                    </form>

                    <div className="text-end">
                        <button 
                        type="button" 
                        className="btn btn-outline-light me-2"

                        >
                        Search
                        </button>
                    </div>
                    </div>
                </div>
                </header>
        </React.Fragment>
        )
    }
};

export default FriendsNavBar;