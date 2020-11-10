$(".js-show-content").click(function() {
  $(this).closest(".js-card-hover").addClass("is-displaying-content");
});

$(".js-card-hover").mouseleave(function() {
  $(this).removeClass("is-displaying-content");
});