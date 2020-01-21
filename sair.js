var count=0;
var resh=0;
var prov=0;
var jad=-1;
var sum=0;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function nachi() 
{   a=getRandomInRange(0,100)
    b= getRandomInRange(0,100)
    sum=a+b;
    prov=0
    document.getElementById("p1").innerHTML=a+"+"+b;
    jad++;
    document.getElementById("nach").value="продолжить";
document.getElementById("taimer").innerHTML= "прошло "+count/10+" секунд";
document.getElementById("otvtets").innerHTML=resh+"из"+jad;
document.getElementById("p2").innerHTML="";
if(count==0){setTimeout("tam()",100);}


}
function tam (){
    count++;
document.getElementById("taimer").innerHTML= "прошло "+count/10+" секунд";
setTimeout("tam()",100);
}
function che(){
    if(prov==0)
    {if(sum==document.getElementById("otv").value)
    {resh++;}
    document.getElementById("p2").innerHTML= "правильный ответ ="+sum+" ";}
    prov++;
}