function fun(){
    const date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}