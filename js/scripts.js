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
  }
  return goodNumber;
}

var assignRomanNumerals = function(number) {
  var translatedNumbers = [];
  for(var index=0; index < romanNumerals.length; index++) {
    if (number % romanNumerals[index] > romanNumerals[index]) {
      var subtractedNumber = number - romanNumerals[index];
      translatedNumbers.push(romanNumerals[index]);
    }
  }
} console.log(subtractedNumber);


$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number1").val());
    var result = checkNumber(userInput);
    $("#results").text(result);
  });
});
