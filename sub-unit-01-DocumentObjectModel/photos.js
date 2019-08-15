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

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
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
function zoomFig() {
   
}

function createEventListeners(){
   var leftArrow = document.getElementById("leftarrow");
   if(leftArrow.addEventListener){
      leftArrow.addEventListener("click", leftArrow, false);
   }else if (leftarrow.attachEvent){
      leftArrow.attachEvent("onclick", leftArrow); 
   }
}
function leftArrow(){
   alert("left arrow clicked");
}

function createEventListeners(){
   var rightArrow = document.getElementById("rightarrow");
   if(rightArrow.addEventListener){
      rightArrow.addEventListener("click", rightArrow, false);
   }else if (rightarrow.attachEvent){
      rightArrow.attachEvent("onclick", rightArrow); 
   }
}
function rightArrow(){
   alert("right arrow clicked");
}



/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}