import React from "react"

class notes extends React.Component {


// sort and group an array.
sortFriendsIntoGroups = (friends) => {
    console.log("group friends",friends)
    
    const chunkSize = 8;
    const arr = friends;
    const groups = arr.map((e, i) => { 
     return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
    }).filter(e => { return e; });
    console.log({arr, groups})

    this.setState((preState) => {
        var groupedFriends = [...preState.sortedFriends]
        groupedFriends = groups;

    return {
        groupedFriends
        
    }
    })
    
}

render() {

    return <React.Fragment>
        
    </React.Fragment>

}
};

export default notes;