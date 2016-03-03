
$(document).ready(function() {
  $('#blanks form').submit(function() {
    var blanks = ["bottleNum"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });

    $('#song').show();

    event.preventDefault();
  });
});
