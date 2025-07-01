let voltage1 = 0;
let voltage2=0;
let ig=0;
let triaccurrent=0;
function selecting()
{

    var x=document.getElementById("diagram").value;

    if(x === "reverseb")
{  console.log(x);
    document.getElementById("positive").textContent= "-";
    document.getElementById("negative").textContent= "+";
}
    if(x === "forwardc")
{  console.log(x);
    document.getElementById("positive").textContent= "+";
    document.getElementById("negative").textContent= "-";
}
if(x === "forwardb")
{  console.log(x);
    document.getElementById("positive").textContent= "+";
    document.getElementById("negative").textContent= "-";
}

if(x === "reversec")
{  console.log(x);
    document.getElementById("positive").textContent= "-";
    document.getElementById("negative").textContent= "+";
}
}
function getVoltage(id) {
    if (id == 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1;
        document.getElementById("gate-current").innerHTML =  voltage1 ;
    }

    else {
        voltage2 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage2;
        document.getElementById("voltage-across-triac").innerHTML =  voltage2;
    }
}

 
    

 
function finalresult(){
    var y=document.getElementById("diagram").value;
   
     if(y  === "forwardb"){
        if(voltage1<1.5)
        triaccurrent=voltage2/318;
    else
    alert("forward blocking ranges for gate current below 1.5 mA")
    }
    if(y==="forwardc"){
        if(voltage1>1.5)
        triaccurrent=voltage2/16.33;
    else
        alert("Forward conduction ranges for gate current greater than 1.5 mA")

    }
    
    if(y  === "reverseb")
    {
    if(voltage2<200)
        triaccurrent=voltage2/700;
    else
    triaccurrent=voltage2/15;

    }
    document.getElementById("current-across-triac").innerHTML=triaccurrent.toFixed(3);

}


//table
let table1 = document.getElementById("table")
let count1 = 0;
const procedure = () => {
    if(voltage1!=0||voltage2!=0){
    table1.innerHTML += `<tr>
                <td id='r${count1}c0' width=150px></td>
                <td id='r${count1}c1' width=150px></td>
                <td id='r${count1}c2' width=150px></td>


  </tr>`
    var data = new Array();
    data.push(voltage1);
    data.push(voltage2);
    data.push(triaccurrent.toFixed(3));
    for (i = 0; i < data.length; i++) {
        document.getElementById("r" + count1 + "c" + i).innerHTML = data[i];
    }
    count1++;
}
else
{
    alert("first find out the required values");
}
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "450px";
    document.getElementById("mySidepanel").style.height = "60%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
