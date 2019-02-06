var window1='<div class="model"style="height:100%;"><div class="header"><a id="close" href="#"> &#10060 </a></div>';
window1 += '<div class="imageDisplay"><img src="..//images/no.jpg"></div></div>';
// create new division for the for the background color
var elImage = document.createElement('div');
elImage.setAttribute('id', 'popUp');
elImage.innerHTML = window1;
// need to attach elNote to the body of your HTML document
document.body.appendChild(elImage);
//get popUp location
function imagePopUp(){
var book = document.getElementById('popUp').style.display='block';
return book;
}
// create function to close to reserve window
function closeWindow(){
  document.getElementById('popUp').style.display='none';
}
var imageOne=document.getElementById('img1');
imageOne.addEventListener('click',imagePopUp, false);

var closeX=document.getElementById('close');
closeX.addEventListener('click',closeWindow, false);
// good lake pro Wu, you are the best! :)
var window2='<div class="model"style="height:100%;"><div class="header"><a id="close2" href="#"> &#10060 </a></div>';
window2 += '<div class="imageDisplay2"><img src="..//images/wait2.png"></div></div>';
// create new division for the for the background color
var elImage2 = document.createElement('div');
elImage2.setAttribute('id', 'popUp2');
elImage2.innerHTML = window2;
// need to attach elNote to the body of your HTML document
document.body.appendChild(elImage2);
//get popUp location
function imagePopUp2(){
var book2 = document.getElementById('popUp2').style.display='block';
return book2;
}
// create function to close to reserve window
function closeWindow2(){
  document.getElementById('popUp2').style.display='none';
}
var imageOne=document.getElementById('img2');
imageOne.addEventListener('click',imagePopUp2, false);


var closeX=document.getElementById('close2');
closeX.addEventListener('click',closeWindow2, false);
// popUp window3 only
var window3='<div class="model"style="height:100%;"><div class="header"><a id="close3" href="#"> &#10060 </a></div>';
window3 += '<div class="imageDisplay3"><img src="..//images/yes.jpg"></div></div>';
// create new division for the for the background color
var elImage3 = document.createElement('div');
elImage3.setAttribute('id', 'popUp3');
elImage3.innerHTML = window3;
// need to attach elNote to the body of your HTML document
document.body.appendChild(elImage3);
//get popUp location
function imagePopUp3(){
var book3 = document.getElementById('popUp3').style.display='block';
return book3;
}
// create function to close to reserve window
function closeWindow3(){
  document.getElementById('popUp3').style.display='none';
}
var imageOne=document.getElementById('img3');
imageOne.addEventListener('click',imagePopUp3, false);


var closeX=document.getElementById('close3');
closeX.addEventListener('click',closeWindow3, false);
