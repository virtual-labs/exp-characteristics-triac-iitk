let voltage1 = 0;
let voltage2 = 0;
let r1 = 0;
let r2 = 0;
let ig=0;
let voltage3=0;
let voltage4=0;
function getVoltage(id) {
    if (id == 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1;
        document.getElementById("voltage-1-display-svg").innerHTML =  voltage1 ;
    }

    else {
        voltage2 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage2;
        document.getElementById("voltage-2-display-svg").innerHTML =  voltage2;
    }
}
function getResistance(id) {

    if (id === 'Resistance-1') {
        r1 = document.getElementById(id).value;
        document.getElementById("r-1-display").innerText = r1;

        document.getElementById("r1-svg-display").innerHTML = r1;
        document.getElementById("r1-svg-display").innerHTML = r1;
        ig=(voltage1/r1).toFixed(2);
        document.getElementById("current1").innerHTML = ig;
    }
    else {
        r2= document.getElementById(id).value;
        document.getElementById("r-2-display").innerText = r2;
        
        document.getElementById("r2-svg-display").innerHTML = r2;
    }
}

let table1 = document.getElementById("table")
let count1 = 0;
const procedure = () => {
    if(voltage1!=0||voltage2!=0||r1!=0||r2!=0){
    table1.innerHTML += `<tr>
                <td id='r${count1}c0' width=100px></td>
                <td id='r${count1}c1' width=100px></td>
                <td id='r${count1}c2' width=100px></td>
                <td id='r${count1}c3' width=100px></td>
                <td id='r${count1}c4' width=100px></td>
                <td id='r${count1}c5' width=100px></td>
                <td id='r${count1}c6' width=100px></td>

  </tr>`
    var data = new Array();
    data.push(voltage1);
    data.push(voltage2);
    data.push(r1);
    data.push(r2);
    data.push(ig);
    data.push(voltage3);
    data.push(voltage4);
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

