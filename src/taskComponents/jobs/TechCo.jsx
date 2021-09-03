import React from "react"
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class TechCo extends React.Component {

    state = {
        current: 1,
      };
    
      onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };

    render() {

        return (
        <React.Fragment>
            <Pagination
        onChange={this.onChange}
        current={this.state.current}
        total={25}
      />
            
        </React.Fragment>
        )
    }
};

export default TechCo;