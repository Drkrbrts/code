import React from "react";




 class MapPresidents extends React.Component{

  state ={

    presidents: [
      {
          "id": 1,
          "president": 1,
          "nm": "George Washington",
          "pp": "None, Federalist",
          "tm": "1789-1797"
      },
      {
          "id": 2,
          "president": 2,
          "nm": "John Adams",
          "pp": "Federalist",
          "tm": "1797-1801"
      },
      {
          "id": 3,
          "president": 3,
          "nm": "Thomas Jefferson",
          "pp": "Democratic-Republican",
          "tm": "1801-1809"
      },
    
    ],
    };


    // componentDidMount(){

    //    this.setState((preState)=>{

    //      return{mappedPresidnts: preState.myPresidents.map(this.mapPresident)}; 

    //    });

    //   service.getPresidents().then(this.onGetSuccess).catch(this.onGetError);

    // }
    

    // onGetSuccess = (myPresidents) =>{
    //   console.log(myPresidents);
    // };

    // onGetError =(err) =>{
    //   console.error(err);

    // };

  





 mapPresident = (presidents) => {

  return(

<div class="card" key={`Presidents-${presidents.id}`}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{presidents.nm}</h5>
    <p class="card-text">{presidents.pp}</p>
    <button href="#" class="btn btn-primary link-button">Go somewhere</button>
  </div>
</div>




    );



 }





  





}



export default MapPresidents;
