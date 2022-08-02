function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(2);
var y = x.insertCell(0);
var z = x.insertCell(1);


y.innerHTML="Row";

z.innerHTML="New Cell2";
}