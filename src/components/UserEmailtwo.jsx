import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'




function UserCards() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    function handleSubmit(e) {
        e.preventDefault();       
        console.log(e.target.id);
      }

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 30, width:300, height:450,  }}>
                {APIData.map((item) => {
                    return (
                        <Card key={item.id}>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>
                                    {item.email}
                                </Card.Description>
                                <button 
                                 type='button' 
                                className="primary-button"
                                onClick={handleSubmit}
                                >console log
                                </button>
                            </Card.Content>
                        </Card>
                    )
                })}
             
            </Card.Group>
            
           
        </div>
    )
}


export default UserCards;