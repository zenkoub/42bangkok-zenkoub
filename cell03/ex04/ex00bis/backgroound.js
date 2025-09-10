$(document).ready(function () {
  $("#btn").on("click", function () {
    $("#bg").css(
      "background-color",
      "#" + Math.floor(Math.random() * 16777215).toString(16)
    );
  });
});
