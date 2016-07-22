IO = {};

IO.init = function(kataCall) {
  $("BODY").keyup(function(event){
    if(event.keyCode == 13){
      $("#kataInputAction").click();
    }
  });

  $("#kataInputAction").bind("click", function() {

    IO.output(kataCall(IO.input()));

    var console = $('#kataConsoleOutput');
    console.scrollTop(console.prop("scrollHeight"))

    $("#kataInput").focus();
  });

  $("#kataInput").focus();
};

IO.input = function() {
  var el = $("#kataInput");
  var inputValue = el.val();
  el.val("");

  return inputValue;
};

IO.output = function(value) {
  var el = $("#kataConsoleOutput");
  var outputValue = el.html();
  outputValue += "<div>" + value + "</div>";
  el.html(outputValue);
};
