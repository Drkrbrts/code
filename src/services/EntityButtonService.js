import React from "react";
import postEntity from "./EntityService"

function postThis(props) {
    console.log(props);
    //var data = props
    //register(props.submitdata);
    postEntity(props.submitdata);
  return <button onClick={props.click} submitdata={props.submitData} type="submit" class="btn btn-primary">Post</button>;
}

export default postThis;