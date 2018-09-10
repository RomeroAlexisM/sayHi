$(document).ready(function(){
  $("#web").hide();
      $("#typed").typed({
        strings: ["Esto es una prueba de tipeo", "Visible en todos los navegadores", "Parece que anda", "VIVA PERON", "LA PUTA MADRE"],
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        loopCount: false,
        callback: function(){ foo(); }
      });
      function foo(){
        $("#preLoader").hide("drop", { direction: "down" }, "slow" );
        $("#preLoader").css("display", "none");
        $("#web").show("fold", 1500 );
       }
});
