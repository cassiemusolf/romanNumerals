var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var romanNumerals = [M, D, C, L, X, V, I];

var checkNumber = function(number) {
  var goodNumber = true;
  if (number >= 4000){
    goodNumber = false;
  } else {
    assignRomanNumerals(number);
  }
  return goodNumber;
}

var assignRomanNumerals = function(number) {
  var translatedNumbers = [];
  for(var index=0; index < romanNumerals.length; index++) {
    var subtractedNumber = number;
    if (subtractedNumber >= romanNumerals[index]) {
      subtractedNumber = subtractedNumber - romanNumerals[index];
      translatedNumbers.push(romanNumerals[index]);
    }
  } return translatedNumbers;
}


$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number1").val());
    var result = checkNumber(userInput);
    $("#results").text(result);
  });
});
