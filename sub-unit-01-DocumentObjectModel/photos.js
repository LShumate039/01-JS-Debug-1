/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

var figureCount = 3;

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   var autoAdvance = setInterval(rightAdvance, 5000);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* open center figure in separate window */


function previewFive() {
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";

   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";

   var articleElem = document.getElementsByTagName("article")[0];
   // alert(articleElem);
   lastFigure.appendChild(lastImage); 
  // articleElem.(lastImage);
   var firstFigure = lastFigure.cloneNode(true);
firstFigure.id = "fig1";
firstFigure.style.right = "";
firstFigure.style.left = "45px";


articleElem.appendChild(firstFigure); 

document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[3].src = "images/IMG_0" + photoOrder[4] + "sm.jpg"; 
   
figureCount = 3; 

   articleElem.insertBefore(lastFigure, document.getElementById("rightarrow")); 

   articleElem.insertBefore(firstFigure, document.getElementById("fig2"));

document.getElementsByTagName("img")[0].src = "images/IMG_0" + "sm.jpg";

document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";

var numberButton = document.querySelector("#fiveButton p");
numberButton.innerHTML = "Show fewer images"; 

if (numberButton.addEventListener) {
   numberButton.removeEventListener("click", previewFive,
   false);
   numberButton.addEventListener("click", previewThree,
   false);
   }
   else if (numberButton.attachEvent) {
   numberButton.detachEvent("onclick", previewFive);
   numberButton.attachEvent("onclick", previewThree);

}

}



function previewThree(){
   var articleElem =
document.getElementsByTagName("article")[0];
var numberButton = document.querySelector(
"#fiveButton");
articleElem.removeChild(document.getElementById("fig1"));
articleElem.removeChild(document.getElementById("fig5"));

figureCount = 3;
numberButton.innerHTML ="Show more images";
if (numberButton.addEventListener) {
numberButton.removeEventListener("click", previewThree,
false);
numberButton.addEventListener("click", previewFive,
false);
}
else if (numberButton.attachEvent) {
numberButton.detachEvent("onclick", previewThree);
numberButton.attachEvent("onclick", previewFive);

}
}

function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600,";
   winOptions += ",left=" + winLeft;
   winOptions += ",top" + winTop;

   var zoomWindow = window.open("zoom.html", "zoomwin", winOptions);

   zoomWindow.focus();
     
}

function createEventListeners(){

   var leftarrow = document.getElementById("leftarrow");
   if(leftarrow.addEventListener){
      leftarrow.addEventListener("click", leftArrow, false);
   }else if (leftarrow.attachEvent){
      leftarrow.attachEvent("onclick", leftArrow); 
   }
   var rightarrow = document.getElementById("rightarrow");
   if(rightarrow.addEventListener){
      rightarrow.addEventListener("click", rightAdvance, false);
   }else if (rightarrow.attachEvent){
      rightarrow.attachEvent("onclick", rightArrow); 
   }
   var mainFig = document.getElementsByTagName("img")[1];

   var showAllButton = document.querySelector("#fiveButton p");
   if(showAllButton.addEventListener){
      showAllButton.addEventListener("click", previewFive, false); 
   }
   else if (showAllButton.attachEvent){
      showAllButton.attachEvent("onclick", previewFive);
   }
   if(mainFig.addEventListener){
      mainFig.addEventListener("click", zoomFig, false); 
   }
   else if(mainFig.attachEvent){
      mainFig.attachEvent("onclick", zoomFig);
   }

   
}

function zoomFig(){
   

}

function populateFigures(){
   var filename;
   var currentFig; 
if(figureCount === 3){
   for(var i = 1; i < 4; i++){
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";

      currentFig = document.getElementsByTagName("img")[i-1];
   currentFig.src = filename; 

   }
   
}

   else{
   for(var i = 0; i<5; i++){
      filename = "image/IMG_0" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i];
      currentFig.src = filename; 
      figureCount = 5; 
   }
}

}


/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent){
  window.attachEvent("onload", setUpPage);
} 



