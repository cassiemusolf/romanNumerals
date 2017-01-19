// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;
// var romanNumerals = [M, D, C, L, X, V, I];
var numbers = [1, 5, 10, 50, 100, 500, 1000];
var translate = function(number) {

  var singleNumberArray = number.split("");
  var lastDigit = parseInt(singleNumberArray[singleNumberArray.length-1]);
  console.log(lastDigit);

  if (lastDigit === numbers[0]) {
    return "I";
  } else if (number === numbers[0]) {
    return "II";
  } else if (number === numbers[1]) {
    return "V";
  } else if (number === numbers[1] + numbers[0]) {
    return "VI";
  } else if (number === numbers[1] - numbers[0]) {
    return "IV";
  } else if (number === numbers[1] + (numbers[0] * 3)) {
    return "VIII";
  } else if (number === numbers[2]) {
    return "X";
  } else if (number === numbers[2] - numbers[0]) {
    return "IX";
  } else if (number === numbers[2] + numbers[1]) {
    return "XV";
  } else if (number === numbers[3] + numbers[1]) {
    return "LV";
  } else if (number === numbers[3] + (numbers[2] - numbers[0])) {
    return "LXI";
  }
}

var digitTranslate = function(number) {

  var singleNumberArray = number.split("");
  var firstDigit = parseInt(singleNumberArray[0]);
  var emptyArray = [];

  if (singleNumberArray.length > 3) {
    for (index=0; index < firstDigit; index++) {
      emptyArray.push("M");
    }
    singleNumberArray.splice(0, 1);
    console.log(singleNumberArray);
    return emptyArray;
  }
}


$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = $("input#number1").val();
    var result = digitTranslate(userInput);
    $("#results").text(result);
  });
});




// var checkNumber = function(number) {
//   var goodNumber = true;
//   if (number >= 4000){
//     goodNumber = false;
//   } else {
//     assignRomanNumerals(number);
//   }
//   return goodNumber;
// }
//
// var assignRomanNumerals = function(number) {
//   var translatedNumbers = [];
//   var subtractedNumber = number;
//   for(var index=0; index < romanNumerals.length; index++) {
//     if (subtractedNumber >= romanNumerals[index]) {
//       subtractedNumber = subtractedNumber - romanNumerals[index];
//       translatedNumbers.push(romanNumerals[index]);
//     }
//   }
//   console.log(subtractedNumber);
//   return translatedNumbers;
// }
