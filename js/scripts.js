$(document).ready(function() {
  $("form#info").submit(function(event) {
    var gender = $("select#gender").val();
    var age = parseInt($("input#age").val());
    var name = $("#nm").val();
    $(".congratulations").text(name);
    $("#congratulations").show();

    if(gender = 'female' && age <= 26) {
      $("#justinBieber").show();
      $("#johnCena").hide();
      $("#morganFreeman").hide();
    }
    else if(gender = 'female' && age >= 60) {
      $("#morganFreeman").show();
      $("#johnCena").hide();
      $("#justinBieber").hide();
    }
    else {
      $("#johnCena").show();
      $("#justinBieber").hide();
      $("#morganFreeman").hide();
    }


    event.preventDefault();
  });
});
