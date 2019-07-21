/* JavaScript for Customer Reviews for Strong Island Gaming
Author: JMP
Date: July 16, 2019
Filename: review.css
*/

window.onload = init;

function init() {
    var stars = document.querySelectorAll("span#stars img");

    //Adds an event listener to run the lightStars() function whenever the mouse hovers over a "star"
    for (var i = 0; i < document.querySelectorAll("span#stars img").length; i++) {
        document.querySelectorAll("span#stars img")[i].addEventListener("mouseenter", lightStars);
    }
    //Adds an event listener to run the updateCount function on keyup
    document.getElementById("comment").addEventListener("keyup", updateCount);
}

//runs the lightStars functio when the user places their mouse over a star
document.querySelectorAll("span#stars img").mouseover = lightStars;

function lightStars(e) {
    var starNumber = e.target.alt;
    var stars = document.querySelectorAll("span#stars img");

    //Changes the image to a "lit" star for the current star and any stars less than it
    for (var i = 0; i < starNumber; i++) {
        document.querySelectorAll("span#stars img")[i].src = "images/bw_star2.png";
    }

    //Prevents the stars greater than the current choice from lighting up
    for (var i = starNumber; i < 5; i++) {
        document.querySelectorAll("span#stars img")[i].src = "images/bw_star.png";
    }

    //Turns off the lit up stars once the user moves their mouse off the stars (without having clicked on one)
    for (var i = 0; i < document.querySelectorAll("span#stars img").length; i++) {
        document.querySelectorAll("span#stars img")[i].addEventListener("mouseleave", turnOffStars);
    }

    //Sets the number of stars chosen when the user clicks on it (lights up the chosen star and all those below it)
    for (var i = 0; i < document.querySelectorAll("span#stars img").length; i++) {
        function click() { 
            for (var i = 0; i < document.querySelectorAll("span#stars img").length; i++){
                document.querySelectorAll("span#stars img")[i].removeEventListener("mouseleave", turnOffStars);
            }
        }
        document.querySelectorAll("span#stars img")[i].addEventListener("click", click);
    }
}

function turnOffStars() {
    var stars = document.querySelectorAll("span#stars img");

    for (var i = 0; i < stars.length; i++) {
        document.querySelectorAll("span#stars img")[i].src = "images/bw_star.png";
    }
}

//Updates the "word count" for the number of characters in the text area
function updateCount() {
    var commentText = document.getElementById("comment").value;
    var charCount = countCharacters(commentText);
    var wordCountBox = document.getElementById("wordCount");

    wordCountBox.value = charCount + "/1000";

    if (charCount > 1000) {
        document.getElementById("comment").style.color = "white";
        document.getElementById("comment").style.backgroundColor = "red";
    } else {
        document.getElementById("comment").style.color = "black";
        document.getElementById("comment").style.backgroundColor = "white";
    }
}

//Counts the number of characters currently in the text area
function countCharacters(textStr) {
    var commentregx = /\s/g;
    var chars = textStr.replace(commentregx, "");
    return chars.length;
}   