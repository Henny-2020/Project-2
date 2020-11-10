$(".js-show-content").click(function() {
  $(this)
    .closest(".js-card-hover")
    .addClass("is-displaying-content");
});
g
$(".js-card-hover").mouseleave(function() {
  $(this).removeClass("is-displaying-content");
});
