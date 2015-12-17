$(function(){
  $("#mapsubmit").click(function(e){
    e.preventDefault();
    var btn = $(this).attr("disabled", "disabled");
    var req = ocpu.call("make_map", {
      title : $("#mytitle").val(),
      lat: $("#mylat").val(),
      lng: $("#mylng").val()
    }, function(session){
      $("iframe").attr('src', session.getFileURL("mymap.html"));
    }).fail(function(text){
      alert("Error: " + req.responseText);
    }).always(function(){
      btn.removeAttr("disabled");
    });
  });
});
