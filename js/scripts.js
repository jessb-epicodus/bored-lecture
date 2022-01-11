$(document).ready(function(){
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("darktheme");
  });

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("lighttheme");
  });

  $(".clickable").click(function(){
    $("p").removeClass();
    $("MyClass").addClass();
    $(".clickable").addClass("clicked");
  });
});
