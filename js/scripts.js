$(document).ready(function() {
  $("form#info").submit(function(event) {
    var name = $("#nm").val();
    $(".results").text(name);
    $("#results").show();


    var gender = $("select#gender").val();
    event.preventDefault();
  });
});
