function calculate()
{
    if(document.getElementById("qu2").value==1){
    document.getElementById("quch").innerHTML="Subtotal ( "+ 1+" "+ " item )"
    document.getElementById("price").innerHTML="US $"+document.getElementById("pr").value;
    var x=document.getElementById("pr2").value;
    var z=x+6.00;
    document.getElementById("price2").innerHTML=" US $ "+z;
}
else {
    document.getElementById("quch").innerHTML=document.getElementById("qu2").value + " "+" items"
    var x=document.getElementById("pr").value;
    var y=document.getElementById("qu2").value;
    var z=x*y;
    var w=z+6.00;
    document.getElementById("price").innerHTML=" US $ "+z;
    document.getElementById("price2").innerHTML=" US $ "+w;
}
}
function myFunction() {
    var checkBox1 = document.getElementById("labal1");
    var text1 = document.getElementsByClassName("btn10");
    if (checkBox1.checked == true){
        text1.innerHTML="pay with visa";
        document.getElementById("pargragh").innerHTML="continue";
    } 
}
function myFunction1() {
    var checkBox = document.getElementById("labal2");
    var text = document.getElementById("btn10");
    if (checkBox.checked == true){
    text.innerHTML="pay with paypal";
    text.innerHTML="You'll finish checkout on PayPal";
    }
}
function myFunction2() {
    var checkBox = document.getElementById("labal3");
    var text = document.getElementById("btn10");
    if (checkBox.checked == true){
        text.innerHTML="pay with";
    document.getElementById("pargragh").innerHTML="this method not available for your country";
    }
}
function myFunction3() {
    var checkBox = document.getElementById("labal4");
    var text = document.getElementById("btn10");
    if (checkBox.checked == true){text.innerHTML="pay with google pay";
    document.getElementById("pargragh").innerHTML="confirm";
    } 
}
