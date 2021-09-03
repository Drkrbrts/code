import React from 'react';
var DataTable = require('react-data-components').DataTable;

const url = 'https://jsonplaceholder.typicode.com/users'

class UserList extends React.Component {

    state = {
        data: []
      }
    
      buildTable = (data) => {
        const tableColumns = [
          { title: 'id', prop: 'id' },
          { title: 'name', prop: 'name' },
          { title: 'email', prop: 'email' },
        ]
    
        return (
          <DataTable
            className="container"
            keys="id"
            columns={tableColumns}
            initialData={data}
            initialPageLength={1}
          />
        )
      }
    
      componentDidMount() {
        fetch(url)
          .then(res => res.json())
          .then((rows) => {
            this.setState({ data: rows })
          })
      }

      consoleLog = () => {
       
            // return { title: this.state.id };
           console.log(this.state.id );
         

      }
    
      render() {
        return <div>{this.buildTable(this.state.data)}
             <button
                className="btn btn-primary col-3 me-3"
                onClick={this.consoleLog}
              >
                Console log
              </button>
        
        </div>
        
      }
}


export default UserList;



