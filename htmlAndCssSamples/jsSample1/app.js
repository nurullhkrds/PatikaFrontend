
let nameInput=window.prompt()

let namee=document.querySelector("#name")
console.log(namee.innerHTML)
namee.innerHTML=nameInput;



var day;
let dayName;

function tarihSaat() {
var today=new Date();
 day=today.getDay()
 switch(day){
    case 0:
        dayName= "Pazar"
        break;
    case 1:
        dayName=  "Pazartesi"
        break;
    case 2:
        dayName=  "Salı"
        break;
    case 3:
        dayName=  "Çarşamba"
        break;
    case 4:
        dayName=  "Perşembe"
        break; 
    case 5:
        dayName=  "Cuma"
        break;
    case 6:
        dayName=  "Cumartesi"
        break;

 }
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

document.getElementById('date').innerHTML=h+":"+m+":"+s+" "+ dayName
}
setInterval(tarihSaat, 1000); 




