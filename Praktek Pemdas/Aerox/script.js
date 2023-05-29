function btn() {
  document.getElementById("imageMotor").style.cssText = "background-image:url(https://otomontir.com/wp-content/uploads/2023/03/Yamaha-Aerox-2023-Cyber-City.png);background-size:850px;background-position:-150px;"
}
//   document.getElementById("imageMotor").style.width = "120%"
  
// }
function btnBack() {
  document.getElementById("imageMotor").style.cssText = "background-image:url(aerox3.png);background-size:cover;"
}
  function btn3() {
    document.getElementById("imageMotor").style.cssText = "background-image:url(aroxcc.jpg)"
    // document.getElementById("imageMotor").style.width = "120%"
    
  }


// document.getElementById('love').addEventListener("click", function() {
  
//   // document.getElementById('love').setAttribute('id',' loveRed');
//   document.getElementById('love').id = "newLove";
  
// })

// document.getElementById('newLove').addEventListener("click", function() {
//   document.getElementById('newLove').id = "love";
//   // document.getElementById('love').setAttribute('id',' loveRed');
// })


// document.getElementById('loveRed').addEventListener('click', function() {
//   document.getElementById('love').setAttribute('id',' love');
//   document.getElementById('love').style.cssText = "font-variation-settings: 'FILL' 0, 'wght' 400,'GRAD' 0,'opsz' 48";

// })

var clicked = true;
    
let cart = 0

function doSomething()
{
   if(clicked)
   {
     document.getElementById('love').style.cssText = "font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48; color: red;"; 
     document.getElementById('counter').innerHTML = cart+=1
      clicked = false;
   }
  else
  {
    //  alert(1); 
    document.getElementById('love').style.cssText = "font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48; color: #252C33;"; 
    document.getElementById('counter').innerHTML = cart-=1
     clicked = true;
  }
}