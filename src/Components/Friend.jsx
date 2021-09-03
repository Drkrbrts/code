import React from 'react';

function Friend(props) {
    const friend = props.friend;

    const onDeleteClicked = () => {
        props.onDClick(friend.id)
    }
    const onEditClick = () => {
        props.onEClick(friend.id)
    }

    return (
        <React.Fragment >
            <div className="card friend-card p-2 mx-2 col-4" style={{ width: '18rem' }}>
                <img src={friend.primaryImage.imageUrl} className="card-img-top rounded-circle h-50" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{friend.title}</h5>
                    <p className="card-text">{friend.summary}</p>
                    <div className="row justify-content-center">
                        <button
                            className="btn btn-danger delete col-5 mx-1"
                            type="button"
                            onClick={onDeleteClicked}
                        >Delete
                        </button>
                        <button
                            className="btn btn-info edit col-5 mx-1"
                            type="button"
                            onClick={onEditClick}
                        >Edit
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Friend);