var beerBottle = function(){
  if (("bottleNum" >= 0) && ("bottleNum" <= 99)) {
    $("#song.bottleNum2").text(userInput - 1);
  };
}
$(document).ready(function() {
  $('#blanks form').submit(function() {
    var blanks = ["bottleNum"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      $("#lowerBottle").text(userInput - 1);

    });

    $('#song').show();

    event.preventDefault();
  });
});
