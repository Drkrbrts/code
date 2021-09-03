import React from 'react'

class FriendCard extends React.Component{

    render(){
        return(
            <div className="card" style={{width: 18}}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default FriendCard