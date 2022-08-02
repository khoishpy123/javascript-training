var number = 2;
function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);

y.innerHTML=`Row${++number} cell1`;

z.innerHTML=`Row${number} Cell2`;
}

function delete_Row() {
    document.getElementById("sampleTable").deleteRow(0);
}