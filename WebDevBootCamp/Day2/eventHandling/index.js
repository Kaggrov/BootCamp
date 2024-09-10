function fun(){
    document.getElementById("myDiv").style.background="red";
}

function fun1(){
    document.getElementById("myDiv").style.background="green";
}

function show(){
    document.getElementById("myDiv").style.display="block";
}
function hide(){
    document.getElementById("myDiv").style.display="none";
}

function toggle(){
    if(document.getElementById("myDiv").style.display=="none") document.getElementById("myDiv").style.display="block";
    else 
    document.getElementById("myDiv").style.display="none";
}