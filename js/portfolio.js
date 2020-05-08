const minMenu = document.querySelector(".navbar-toggler");
const projects = document.querySelector("#projects");
const projectDiv = document.querySelectorAll('.project');
const cardText = document.getElementsByClassName("card-text");
const projectDetails = document.getElementsByClassName("project-details");


// navigation background transition
minMenu.addEventListener('click', () => {
  $(".navbar").css("background","rgb(20,55,70)");
  $(".navbar").css("padding-top",".5rem");
  $(".navbar").css("transition",".5s ease");
});

document.addEventListener("click", (event) => {
  if (event.target.className == "nav-item nav-link active");
    $("#navbarNavAltMarkup").removeClass("show");
});

$(document).ready(function(){
$(window).on("scroll",function(){
  var wn = $(window).scrollTop();
    if (wn > 50){
      $(".navbar").css("background","rgb(20,55,70)");
      $(".navbar").css("padding-top",".5rem");
      $(".navbar").css("transition",".5s ease");
    }
    else {
      $(".navbar").css("background","none");
      $(".navbar").css("padding-top","1rem");
      $(".navbar").css("transition",".5s ease");
    }
});
});


// project card animation
const arrow = document.getElementsByClassName("see-more");

for(var i = 0; i < projectDiv.length; i ++ ) {
    projectDiv[i].onclick = function() {
      console.log(event);
      arrow[i].style.transform = "rotate(180deg)";
    };
  };
