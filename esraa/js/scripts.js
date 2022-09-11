
// var inp2=document.getElementById("").value;
// var inp3=document.getElementById("").value;
// var inp4=document.getElementById("").value;
// var inp5=document.getElementById("").value;

// var p1=document.getElementById("par1");
// p1=document.write(inp.value);
// var p2=document.getElementById("par2").innerHTML(inp2);
// var p3=document.getElementById("par3").innerHTML(inp3);
// var p4=document.getElementById("par4").innerHTML(inp4);
// var p5=document.getElementById("par5").innerHTML(inp5);

// function text()
// {
//     document.getElementById("par1").innerHTML=document.getElementById("inp1").value;
//     document.getElementById("par2").innerHTML=document.getElementById("address").value;
//     document.getElementById("par3").innerHTML=document.getElementById("city").value;
//     document.getElementById("par4").innerHTML=document.getElementById("country").value;
//     document.getElementById("par5").innerHTML=document.getElementById("phone").value;
// }
// function choosenoption()
// {
    

//     if (document.getElementById("radio111").is(':checked')) {
//       document.getElementById("btn10").innerHTML="visa";
//     }    
// }
function calculate()
{
    if(document.getElementById("qu2").value==1){
    document.getElementById("quch").innerHTML="Subtotal ( "+ 1+" "+ " item )"
    document.getElementById("price").innerHTML="US $"+document.getElementById("pr").value;
    // document.getElementById("price2").innerHTML=document.getElementById("pr2").value;
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
// document.getElementById("quch").innerHTML=document.getElementById("qu2").value;
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

