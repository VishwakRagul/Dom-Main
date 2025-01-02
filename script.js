calcValue ='';

 
function  calc( myval){

if(myval==="AC"){
   document.getElementById("inputfield").value = '';
   calcValue ='';
}
else if(myval === "C"){
   calcValue= document.getElementById("inputfield").value.slice(0,-1);
   document.getElementById("inputfield").value = calcValue; 
}
else if(myval === "="){
   if(document.getElementById("inputfield").value.length<=0){

      console.log('No Input');
   }
   
   else{

         calcValue  = eval(calcValue);
         document.getElementById("inputfield").value =eval(calcValue );
   }
}

else{
   calcValue += myval
   document.getElementById("inputfield").value = calcValue;
}

}