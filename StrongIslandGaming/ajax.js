/* Script file for the AJAX request for Strong Island Gaming
Author: JMP
Date: July 16, 2019
Filename: ajax.js
*/

"use strict";

//Variable to be used in determining if the input being checked is the first after page load
var prompt = true; 

//AJAX request for the Grading service option
function grade() {
    //If the input being checked is the first after page load then no warning is given to user
    if (prompt === true ) {
        //Creates a new XMLHttpRequest object
        var gradingRequest = new XMLHttpRequest();
        //Open the request and pass the HTTP method name and resource as parameters
        gradingRequest.open("GET", "grading.html");
        //A function that runs anytime the state of the AJAX request changes
        gradingRequest.onreadystatechange = function () {
            if (gradingRequest.readyState === 4) {
                document.getElementById("ajaxContent").innerHTML = gradingRequest.responseText;
            }
        } 
        //Fire the request and send to page
        gradingRequest.send();
        prompt = false; 
    } else {
        //If the input being checked is NOT the first after page load then a warning is given before new AJAX load and loss of current order inputs
        (confirm("You will lose all your current selections, continue?")); {
            //Creates a new XMLHttpRequest object
            var gradingRequest = new XMLHttpRequest();
            //Open the request and pass the HTTP method name and resource as parameters
            gradingRequest.open("GET", "grading.html");
            //A function that runs anytime the state of the AJAX request changes
            gradingRequest.onreadystatechange = function () {
                if (gradingRequest.readyState === 4) {
                    document.getElementById("ajaxContent").innerHTML = gradingRequest.responseText;
                }
            }
            //Fire the request and send to page
            gradingRequest.send();
        }
    }
}
//AJAX request for the Computer Rental service option
function computer() {
        //If the input being checked is the first after page load then no warning is given to user
    if (prompt === true) {
        //Creates a new XMLHttpRequest object
        var computerRentalRequest = new XMLHttpRequest();
        //Open the request and pass the HTTP method name and resource as parameters
        computerRentalRequest.open("GET", "computers.html");
        //A function that runs anytime the state of the AJAX request changes
        computerRentalRequest.onreadystatechange = function () {
            if (computerRentalRequest.readyState === 4) {
                document.getElementById("ajaxContent").innerHTML = computerRentalRequest.responseText;
            }
        }
        //Fire the request and send to page
        computerRentalRequest.send();
        prompt = false;
    } else {
        //If the input being checked is NOT the first after page load then a warning is given before new AJAX load and loss of current order inputs
        (confirm("You will lose all your current selections, continue?")); {
            //Creates a new XMLHttpRequest object
            var computerRentalRequest = new XMLHttpRequest();
            //Open the request and pass the HTTP method name and resource as parameters
            computerRentalRequest.open("GET", "computers.html");
            //A function that runs anytime the state of the AJAX request changes
            computerRentalRequest.onreadystatechange = function () {
                if (computerRentalRequest.readyState === 4) {
                    document.getElementById("ajaxContent").innerHTML = computerRentalRequest.responseText;
                }
            }
            //Fire the request and send to page
            computerRentalRequest.send();
        }
    }
}
//AJAX request for the Product Purchase service option
function product() {
    //If the input being checked is the first after page load then no warning is given to user
    if (prompt === true) {
        //Creates a new XMLHttpRequest object
        var productPurchaseRequest = new XMLHttpRequest();
        //Open the request and pass the HTTP method name and resource as parameters
        productPurchaseRequest.open("GET", "purchase.html");
        //A function that runs anytime the state of the AJAX request changes
        productPurchaseRequest.onreadystatechange = function () {
            if (productPurchaseRequest.readyState === 4) {
                document.getElementById("ajaxContent").innerHTML = productPurchaseRequest.responseText;
            }
        }
        //Fire the request and send to page
        productPurchaseRequest.send();
        prompt = false;   
    } else {
        //If the input being checked is NOT the first after page load then a warning is given before new AJAX load and loss of current order inputs
        (confirm("You will lose all your current selections, continue?")); {
            //Creates a new XMLHttpRequest object
            var productPurchaseRequest = new XMLHttpRequest();
            //Open the request and pass the HTTP method name and resource as parameters
            productPurchaseRequest.open("GET", "purchase.html");
            //A function that runs anytime the state of the AJAX request changes
            productPurchaseRequest.onreadystatechange = function () {
                if (productPurchaseRequest.readyState === 4) {
                    document.getElementById("ajaxContent").innerHTML = productPurchaseRequest.responseText;
                }
            }
            //Fire the request and send to page
            productPurchaseRequest.send();
        }
    }
}

function confirmation() {
    window.alert("Order Placed! Thanks for being a valued customer!");
}

function productConfirmation() {
    if (document.querySelector('#itemOne:checked') || document.querySelector('#itemTwo:checked') || document.querySelector('#itemThree:checked') || document.querySelector('#itemFour:checked') || document.querySelector('#itemFive:checked') || document.querySelector('#itemSix:checked') || document.querySelector('#itemSeven:checked') || document.querySelector('#itemEight:checked')) { window.alert("Order Placed! Thanks for being a valued customer!")} else {window.alert("Please select at least one product for purchase!")}
}