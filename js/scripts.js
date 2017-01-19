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

  var mString = emptyArrayM.join("");
  var cString = emptyArrayC.join("");
  var xString = emptyArrayX.join("");
  var iString = emptyArrayI.join("");

  var translatedFinal = mString + cString + xString + iString;
  return translatedFinal;

}




$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = $("input#number1").val();
    var result = digitTranslate(userInput);
    $("#results").text(result);
  });
});
