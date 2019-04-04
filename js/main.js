var inputNumber = document.getElementById("units");
var units = parseInt(inputNumber.value);
var number = document.getElementById('number');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

//var realin =parseInt(input, 10); // the number in the input
var realnum = parseInt(number.textContent, 10); // the number that you show


inputNumber.addEventListener("change",refresh)
plus.addEventListener("click",add);
minus.addEventListener("click",rest);



function refresh(){
  units = parseInt(inputNumber.value);
}

function add(){
realnum = realnum + units;
number.textContent = realnum;
checkcol();
}

function rest(){
  realnum = realnum - units;
  number.textContent = realnum;
  checkcol();
  }


function checkcol(){
  if(realnum<0){
    number.style.color = "red";
  }else{
    number.style.color = "black";
  }
}
