function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechage = funcction(){
        if (this. readyState == 200)
        {
            alert( this.responseText);
        }
    };
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your Json Data Here");


    <button type="submit" onclick="UserAction()">search</button>
}