$ (document).ready(function() {
  $("form#romanNumerals").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number1").val());
    $("#results").text(userInput);
  });
});
