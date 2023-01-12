document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("plus").innerHTML = "plus : " + sum;
});

document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("minus").innerHTML = "minus : " + sum;
});

document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("multiply").innerHTML = "multiply : " + sum;
});

document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("divide").innerHTML = "divide : " + sum;
});

function myalert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert(sum);
}
function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum1 = parseInt(num1) - parseInt(num2);
    alert(sum1);
}
function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1) * parseInt(num2);
    alert(sum2);
}
function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1) / parseInt(num2);
    alert(sum3);
}

const img = document.createElement("img");
img.src = "img/pic.jpg"
img.style.width = "200px"

document.getElementById("myDiv").appendChild(img);

function myalert5(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/ ((parseInt(num2)/100)**2);
    alert(sum.toFixed(2));
}