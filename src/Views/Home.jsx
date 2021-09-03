import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.currentUser
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
        this.setState({ user: this.props.currentUser })
    }

    render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }

    renderContent = () => {
        const user = this.state.user

        return (
            <React.Fragment>
                {user
                    ? (
                        <div className="d-flex justify-content-between">
                            <h1>Welcome {user.firstName} {user.lastName}!</h1>
                        </div>
                    )
                    : <h1>Loading...</h1>
                }
            </React.Fragment>
        )
    }

}

export default Home;