$(document).ready(function(){
  //Circle Expand Toggle Code - Requires JQuery
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();
    $('.circle').toggleClass("circle-expand");
  });

  $('#nav-toggle-icon').hover(function(){
    $(this).toggleClass("rotated");
    $('#nav-toggle-label').toggleClass("anim-slide-fade-left");
  }, function(){
    $(this).toggleClass("rotated");
    $('#nav-toggle-label').toggleClass("anim-slide-fade-left");
  });
});
