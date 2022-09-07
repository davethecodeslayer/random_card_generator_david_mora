/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pints = ["♦", "♥", "♠", "♣"];
  var numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "K",
    "J",
    "A"
  ];

  let getPint = Math.floor(Math.random() * 4);
  let getNumber = Math.floor(Math.random() * 12);

  let randomPint = pints[getPint];
  let randomNumber = numbers[getNumber];

  let callingCardNumber = document.querySelector(".cardNumber");
  callingCardNumber.innerText = randomNumber;

  let callingCardPints = document.querySelectorAll(".cardPint");
  callingCardPints.forEach(callingCardPint => {
    callingCardPint.innerText = randomPint;
  });

  let callingCard = document.querySelector(".Card");

  if (randomPint === "♦") {
    callingCard.classList.add("diamond");
  } else if (randomPint === "♥") {
    callingCard.classList.add("heart");
  } else if (randomPint == "♠") {
    callingCard.classList.add("spade");
  } else {
    callingCard.classList.add("club");
  }
};
