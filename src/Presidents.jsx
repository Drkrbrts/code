import React from "react";
import service from "./services/userService"
import singlePres from "./SinglePres";

class Presidents extends React.Component{


    state = {
        names: ["Geroge Washington", "John Adams", "Thomas Jefferson"],
        // presidents: [{ name: "Geroge Washington", id: 1 }, { name: "John Adams", id: 2 }]

        // presidents: [
        //     {
        //         id: 1,
        //         president: 1,
        //         nm: "Geroge Washington",
        //         pp: "None, Federalist",
        //         tm: "1789-1797",
        //         avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
        //     },
        //     {
        //         id: 2,
        //         president: 2,
        //         nm: "John Adams",
        //         pp: "Federalist",
        //         tm: "1797-1801",
        //         avatar: "https://www.whitehouse.gov/wp-content/uploads/2021/01/02_john_adams.jpg"
        //     },
        //     {
        //         id: 3,
        //         president: 3,
        //         nm: "Thomas Jefferson",
        //         pp: "Democratic-Republican",
        //         tm: "1801-1809",
        //         avatar:"https://i.natgeofe.com/k/040f43ab-2e58-443b-a51b-b93204d8e912/jefferson-portrait.jpg"
        //     },
            
        // ],

        //USING AJAX CALLS
        service.getPresidents().then(this.onGetSuccess).catch(this.onGetError);
      
    };

    onGetSuccess = (myPresidents) => {
        console.log(myPresidents); //returns an array of presidents

        this.setState((myPresidents) => {
            return { mappedPresidents: myPresidents.president.map(this.mapPresident) }
        });
    };

    onGetError = (err) => console.error(err);


    onPresClicked = (e) => {
        console.log(e.currentTarget //data-pres-id
            , e.currentTarget.dataset //presId
            ,e.currentTarget.dataset.presId //will get you just the id number
        );
        e.preventDefault();
    };

    onPresClickedFull = (pres) => {
        console.log(pres);
      
    };





    componentDidMount()
    {
        // this.setState((prevState) => {
        //     return { mappedPresidents: prevState.president.map(this.mapPresident) }
        // });


    };

    mapPresident = onePresident => {
        return (
            <React.Fragment key={`Presidents-${onePresident.id}`} >
                {/* <singlePres president={onePresident}></singlePres> */}
                <singlePres
                    president={onePresident}
                    onClick-={this.onPresClickedFull}
                ></singlePres>
            {/* <div className="card col-md-3">
                <img src={onePresident.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ onePresident.nm }</h5>
                    <p className="card-text">
                        <strong>{onePresident.pp}</strong>
                    </p>
                        <button className=""
                            // onClick={this.onPresClicked} 
                            // onClick={this.onPresClickedFull} //BEST WAY TO DO THE CLICK HANDLER!! (to pass one function to the button)
                            onClick={()=>this.onPresClickedFull(onePresident)} //giving you the entire president obj (concise verson)
                            data-pres-id={onePresident.id}>Go somewhere</button>
                        {/* (data-pres-id )giving the id a unique name  */}
                {/* </div>
                // </div> */} 
                </React.Fragment>
        );
    };
    mapPresidentSimple = onePresident => {
        //return <p key={onePresident.id}>{onePresident.name}</p>;
        return <p key={`Presidents-${onePresident.id}`}>{onePresident.nm}</p>; //giving each president a unique id and making sure it doesn't match other id
    };



    // mapPresident= onePresident => {
    //     //return <p key={onePresident.id}>{onePresident.name}</p>;
    //     return <p key={`Presidents-${onePresident.id}`}>{onePresident.name}</p>; //giving each president a unique id and making sure it doesn't match other id
    // };

    render() {
        return (
            <div className="col-md-12 p-5">
                <h1>Presidents</h1>
                <hr />
                <div
                    className="row">
                    {/* {this.state.presidents.map(this.mapPresident)} */}
                    {this.state.mappedPresidents}
                </div>
            </div>
        );
    };
};













export default Presidents;