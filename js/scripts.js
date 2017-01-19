// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;
// var romanNumerals = [M, D, C, L, X, V, I];
var numbers = [1, 5, 10, 50, 100, 500, 1000];

var digitTranslate = function(number) {

  var singleNumberArray = number.split("");
  var firstDigit = parseInt(singleNumberArray[0]);
  var emptyArrayM = [];
  var emptyArrayC = [];
  var emptyArrayX = [];
  var emptyArrayI = [];


  if (singleNumberArray.length === 4) {
    for (index=0; index < firstDigit; index++) {
      emptyArrayM.push("M");
    }
    singleNumberArray.splice(0, 1);
    firstDigit = parseInt(singleNumberArray[0]);
  }
  if (singleNumberArray.length === 3) {
    for (index=0; index < firstDigit; index++) {
      emptyArrayC.push("C");
    }
    singleNumberArray.splice(0,1);
    firstDigit = parseInt(singleNumberArray[0]);
  }
  if (singleNumberArray.length === 2) {
    for (index=0; index < firstDigit; index++) {
      emptyArrayX.push("X");
    }
    singleNumberArray.splice(0,1);
    firstDigit = parseInt(singleNumberArray[0]);
  }
  if (singleNumberArray.length === 1) {
    for (index=0; index < firstDigit; index++) {
      emptyArrayI.push("I");
    }
  }

  var cLength = emptyArrayC.length;

  if (cLength >= 5 && cLength <= 8) {
    emptyArrayC.splice(0, 5, "D");
  } else if (cLength === 4) {
    emptyArrayC.splice(0, 4, "CD");
  } else if (cLength === 9) {
    emptyArrayC.splice(0, 9, "CM");
  }

  var xLength = emptyArrayX.length;

  if (xLength >= 5 && xLength <= 8) {
    emptyArrayX.splice(0, 5, "L");
  } else if (xLength === 4) {
    emptyArrayX.splice(0, 4, "XL");
  } else if (xLength === 9) {
    emptyArrayX.splice(0, 9, "XC");
  }

  var iLength = emptyArrayI.length;

  if (iLength >= 5 && iLength <= 8) {
    emptyArrayI.splice(0, 5, "V");
  } else if (iLength === 4) {
    emptyArrayI.splice(0, 4, "IV");
  } else if (iLength === 9) {
    emptyArrayI.splice(0, 9, "IX");
  }
  return emptyArrayI;
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

// var translate = function(number) {
//
//   var singleNumberArray = number.split("");
//   var lastDigit = parseInt(singleNumberArray[singleNumberArray.length-1]);
//   console.log(lastDigit);
//
//   if (lastDigit === numbers[0]) {
//     return "I";
//   } else if (number === numbers[0]) {
//     return "II";
//   } else if (number === numbers[1]) {
//     return "V";
//   } else if (number === numbers[1] + numbers[0]) {
//     return "VI";
//   } else if (number === numbers[1] - numbers[0]) {
//     return "IV";
//   } else if (number === numbers[1] + (numbers[0] * 3)) {
//     return "VIII";
//   } else if (number === numbers[2]) {
//     return "X";
//   } else if (number === numbers[2] - numbers[0]) {
//     return "IX";
//   } else if (number === numbers[2] + numbers[1]) {
//     return "XV";
//   } else if (number === numbers[3] + numbers[1]) {
//     return "LV";
//   } else if (number === numbers[3] + (numbers[2] - numbers[0])) {
//     return "LXI";
//   }
// }
