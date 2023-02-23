// Smooth scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  let offset = 75; // number of pixels to offset the scroll

  if (window.matchMedia("(max-width: 600px)").matches) {
    offset = 50;
  }

  const target = $($.attr(this, "href"));
  const targetPosition = target.offset().top - offset;

  $("html, body").animate(
    {
      scrollTop: targetPosition,
    },
    500
  );
});
