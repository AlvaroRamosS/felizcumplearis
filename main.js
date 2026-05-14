$(document).ready(function () {
  $("#thankyou").click(function (e) {
    e.preventDefault();
    alert("De nada tonoto");
  });

  $("#sorpresa").click(function (e) {
    alert(
      "Pero espera! Eso no es todo! Si le dices a Álvaro el código secreto 'Me pica la cola' serás ganadora de una rascadita gratis! Por cierto te amo c:",
    );
    showMenu(true);
  });
});
