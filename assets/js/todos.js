// $("li").on("click", function(){
//   // MANUALLY
//   // IF li is grey then turn back to back else turn grey
//   if($(this).css("color") == "rgb(128, 128, 128)"){
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }else { 
//     $(this).css({
//       color: "grey",
//       textDecoration: "line-through"
//     });
//   }
// });

// single line by having a class named .completed on the CSS file.
// NOTE: This way doesnt work on dynamically changing environments....
// $("li").on("click", function(){
//   $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});



// Click on X to DELETE the TODO
// i am changing ("span")-->("ul") in order to be able to "hear"
// this after the new inserts.
$("ul").on("click", "span", function(event){
  // prevent my click from bubbling up ont the ul and then the container etc.
  event.stopPropagation();
  // by using the parent() method i am pointing on the li-parent of the span 
  // i am clicking.
  $(this).parent().fadeOut(1000, function(){
    // REMEMBER,i already picked the wanted -li- using parent() above,if i use 
    // parent() again,i will delete all the lis in the ul.
    $(this).remove();
  });
});


// I want to extract the text from the input and by hitting enter i want to 
// have a new li in the bottom of the list.
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // I save the text in a variable.
   var todoText = $(this).val();
   // after i insert my new TODO i need the text input to be blank.
   $(this).val("");
   // create a new li and add to the ul
   $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus-circle").click(function(){
  $("input").fadeToggle(1000);
});