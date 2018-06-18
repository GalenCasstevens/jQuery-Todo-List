$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", deleteItem);

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + $("input[type='text']").val() + '</li>')
    $("input[type='text']").val("");
  }
});

$("#toggle-form").click(function() {
  $("input[type='text']").fadeToggle();
});

function deleteItem(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
}
