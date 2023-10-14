

$("#login").on("click",function()
{
    $(".signindivoverlay").css({'visibility':"visible"})
    $(".signupdivoverlay").css({'visibility':"hidden"})
})
$("#join").on("click",function()
{
    $(".signupdivoverlay").css({'visibility':"visible"})
    $(".signindivoverlay").css({'visibility':"hidden"})
})

$(".closesignin").click(function(){
    $(".signindivoverlay").css({'visibility':"hidden"})
})
$(".closesignup").click(function(){
    $(".signupdivoverlay").css({'visibility':"hidden"})
})
$("").on('click',function(){
    $(".top-bar").animate({'height':'110px'})
    $(".bar-content").animate({'padding-top':'4%'})
})
// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add "active" class to elements in viewport
  function addFadeInAnimation() {
    const elementsToAnimate = document.querySelectorAll('.fadein');
    
    elementsToAnimate.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  // Add an event listener to check for elements in viewport on scroll
  window.addEventListener('scroll', addFadeInAnimation);
  
  // Trigger the initial check when the page loads
  window.addEventListener('load', addFadeInAnimation);
  