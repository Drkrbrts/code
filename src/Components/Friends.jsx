import React from "react";
import * as friendService from "../services/friendService";
import TechButton from "./TechButton";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import AddFriendsButton from "./AddFriendsButton";
import Logout from "./Logout";
import {Route} from "react-router-dom";
import JobsButton from "./JobsButton";
import Pagination from "rc-pagination";
import EventsButton from "./EventsButton";




class Friends extends React.Component {

    state = {
        friends: [],
        page: 1,
        formData: ""
    }                

    componentDidMount() {                                                      

        friendService.friends().then(response => {
            let pages = response.data.item.pagedItems;
            console.log(pages, "onGetFriendsSuccess");

            this.setState(() => {
                let friends = {...this.state.friends};

               friends =  pages;
               

                return {friends};                

            })       
            
        }).catch(error => {      
            console.warn(error, "onGetFriendsFailure");
        })


    }        

    deleteFriend = (e) => {     
        let currentTarget = e.currentTarget;       
        let id = currentTarget.id;
        console.log(id);
        friendService.deleteFriend(id).then(response => {
            console.log(response, "onDeleteFriendSuccess");
            
            this.setState(() => {
                let newFriends = {...this.state.friends};
              
                let friends = [];         

                for (let key in newFriends) {
                    id = parseInt(id);
                    newFriends[key].id = parseInt(newFriends[key].id);
                    
                    if (newFriends[key].id !== id) {

                        friends.push(newFriends[key]);
                    }
                    
                }                              
               return {friends};    
                
            })

        }).catch(error => {
            console.warn(error, "onDeleteFriendFailure");
        })     
    }

    onChange = (number) => {
      console.log(number);
      this.setState(() => {
        let page = {...this.state.page};
        page = number;
        return {page};
      })
    }
         
    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({page: pageNumber});
    }


    friendSearch = () => {

      friendService.friends().then(response => {
        let pages = response.data.item.pagedItems;
        console.log(pages, "onGetFriendsSuccess");

        this.setState(() => {
          let oldFriends = {...this.state.friends};
          let page = {...this.state.page};     
          oldFriends = pages;
         let friends = [];
          for (let key in oldFriends) {
            console.log(oldFriends[key].title.toLowerCase().indexOf(formData.toLowerCase()));
            if (oldFriends[key].title.toLowerCase().indexOf(formData.toLowerCase()) !== -1) {
              friends.push(oldFriends[key]);
            }
          }
          console.log(friends);
          
          page = 1;                                
          
            return {friends, page};                           
            
        })
        
    }).catch(error => {                                                      
        console.warn(error, "onGetFriendsFailure");
    })

      let formData = this.state.formData;           
          
    }

    enterFriend = (e) => {
      if (e.key === "Enter") {
        return this.friendSearch();
      }
    }

    friendSlice = (array) => {
        if (this.state.page === 1) {
          return array.slice(0, 3);
        } else {
          return array.slice((this.state.page * 3) - 3, this.state.page * 3);
        }
    }


    onFormFieldChanged = (e) => {

      let currentTarget = e.currentTarget;
      
      let newValue = currentTarget.value;
      

      this.setState(() => {
          let formData = {...this.state.formData};
          formData = newValue;

          return {formData};
      })       
  }      

    friendMap = (friend) => {                                                                                                                                                                                                                                      
     
        return (              
           
            <div key={`Friends-${friend.bio}`} id={friend.slug} className="card shadow" style={{width:  "18rem", float: "left", marginRight: "20px", marginLeft: "20px", marginTop: "20px", justifyContent: "center"}}>
                <img src={friend.primaryImage.imageUrl} className="card-img-top" alt="..." style={{borderRadius: "50%", maxHeight: "150px", width: "60%", alignSelf: "center", marginTop: "5px"}} />
                <div className="card-body" style={{alignSelf: "center"}}>
                  <h5 className="card-title" style={{ textAlign: "center"}} >{friend.title}</h5>
                  <p className="card-text"style={{textAlign: "center"}} >{friend.summary}</p>

                  <button id={friend.id} onClick={this.deleteFriend} type="button" className="btn btn-danger shadow" style={{margin: "5px", bottom: "0"}}>Delete</button>
                  <button name={friend.id} onClick={this.props.action}   type="button" className="btn btn-info shadow" style={{margin: "5px", bottom: "0"}}>Edit</button>
                  
                </div>
                </div>
            
        )                  
    
    }     

    
    render() {

        return <React.Fragment>

<header style={{backgroundColor: "steelBlue"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              <Route path="/addFriends" >
                <FriendsButton {...this.props} />
              </Route>
              <Route path="/editFriend" >
                <FriendsButton {...this.props} />
              </Route>

              <Route path="/friends" >
                <AddFriendsButton {...this.props} />
              </Route>
              
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Blogs
                </button>
              </li>

              <Route path="/" component={TechButton} />

             <Route path="/" component={JobsButton} />     
              <Route path="/" component={EventsButton} />
              <Logout {...this.props} />
            </ul> 

           
            <input onKeyPress={this.enterFriend} onChange={this.onFormFieldChanged} type="text" className="form-control" aria-label="Text input with segmented dropdown button" style={{width: "15%"}} />
            <button onClick={this.friendSearch} type="button" className="btn btn-outline-secondary" style={{color: "white", borderColor: "white"}}>Search</button>
  


          </div>     

         
        
      </header>


                    
                        
                  
      <span className="align-items-center" style={{display: "inline"}}>
                {this.friendSlice(this.state.friends).map(this.friendMap)}
                </span>
        <div style={{position: "fixed", bottom: "20%", float: "right", padding: "20px"}}>
        <Pagination
        
          current={this.state.page}
          pageSize={3}
          total={this.state.friends.length}
          pageRangeDisplayed={5}
          nextIcon={">"}
          prevIcon={"<"}
          onChange={this.onChange}
        />
      </div>
        </React.Fragment>
    }
}



export default Friends;