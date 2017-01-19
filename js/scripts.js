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



$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number1").val());
    var result = checkNumber(userInput);
    $("#results").text(result);
  });
});
