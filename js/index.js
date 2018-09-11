$(document).ready(function() {
  //esconde la web y muestra el preLoader
  $("#web").hide();
  $("#typed").typed({
    strings: ["Esto es una prueba de tipeo"],
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function() {
      mostrarWeb();
    }
  });

  function mostrarWeb() {
    $("#preLoader").hide("drop", {
      direction: "down"
    }, "slow");
    $("#preLoader").css("display", "none");
    $("#web").show("fold", 1500);
  }



});
