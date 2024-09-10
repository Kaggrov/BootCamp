const arr = [12,2,6,9,14,26,1,-4];

function sum(){
    let sum = 0
    arr.forEach((value)=>sum+=value)
    document.getElementById("out").innerHTML = sum;
}

function square(){
    const newArr=[];

    arr.map((val)=>{
        newArr.push(val*val)
    })

    document.getElementById("out").innerHTML = newArr.toString();
}

function validate(){
    const newArr = arr.filter((val)=>{
        return val>0;
    })

    document.getElementById("out").innerHTML =newArr;
}

function addNumber(){
    let Integers = document.getElementById('list');
    Integers.options[Integers.options.length] = new Option(document.getElementById("ele").value ,document.getElementById("ele").value);
    
    arr.push(parseInt(document.getElementById("ele").value))
    document.getElementById("ele").value="";

}