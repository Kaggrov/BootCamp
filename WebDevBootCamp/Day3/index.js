function time(){
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString()
}

function fun(){
    const date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
    setInterval(time,1000);
}