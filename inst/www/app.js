$(function(){

  function make_map(){
    var req = ocpu.call("make_map", {
      title : $("#mytitle").val(),
      lat: $("#mylat").val(),
      lng: $("#mylng").val()
    }, function(session){
      $("iframe").attr('src', session.getFileURL("mymap.html"));
    }).fail(function(text){
      alert("Error: " + req.responseText);
    });
  }

  $("#mapsubmit").click(function(e){
    e.preventDefault();
    make_map();
  });
});
