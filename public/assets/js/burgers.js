$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    $.post("/api/burgers", {
      type: "POST",
      burger_name: $("#burgerInput").val().trim(),
      devoured: false
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
    $(".change-devoured").on("click", function (event) {
      event.preventDefault();
    var id = $(this).data("id");
    var newdevoured = $(this).data("devoured");
    $.ajax("/api/burgers/" + id, {
      method: "PUT",
      data: newdevoured
    }).then(
      function() {
        location.reload();
      }
    );
  });
});