

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

  var count=1;

$(".next").on('click',()=>
{
    if(count<10){
        count=count+1;
        console.log(count)
    }
   var cstr1=count.toString()
   for(var i = count-1;i>=1;i--)
   {
    if(count<=10){
        j=i.toString()
        $(".slide"+j).css({"visibility":"hidden"})
    }
   }

   $('.slide'+cstr1).css({"visibility":"visible"})
   $('.slide'+ cstr1).addClass('fadein')
    setTimeout(()=>
    {
      $('.slide'+ cstr1).removeClass('fadein')
    },3000)
   
})

$(".prev").on('click',()=>
{    
    if(count>1){
        count=count-1;
        console.log(count)
    }
   var cstr=count.toString()
    for(var i=1;i<=10;i++)
    {
        if(i!=count)
        {    var j=i.toString()
            $(".slide"+j).css({"visibility":"hidden"})
        }
    }
    $('.slide'+ cstr).css({"visibility":"visible"})
    $('.slide'+ cstr).addClass('fadein')
    setTimeout(()=>
    {
      $('.slide'+ cstr).removeClass('fadein')
    },1000)
    
})


$(document).on("click",(x)=>
{ var cl=(x.target.classList[1])
  var bt=(x.target.classList[0])
  var exit=(x.target.classList[1])
  if(cl=="my_profile" || (bt=="uploadbtn") || (exit=="logout")){
    $(".pro").css({'visibility':"visible"})
  }
  else{
    $(".pro").css({'visibility':'hidden'})
  }
})

var  profilePic=document.getElementById("pp")
var  inputFile=document.getElementById("input-file")

  inputFile.onchange = function() {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
}


$(".rarrow").on('click',()=>
{
    if(count<5){
        count=count+1;
        console.log(count)
    }
   var cstr1=count.toString()
   for(var i = count-1;i>=1;i--)
   {
    if(count<=5){
        j=i.toString()
        $(".course-slide-"+j).css({"visibility":"hidden"})
    }
   }

   $('.course-slide-'+cstr1).css({"visibility":"visible"})
   $('.course-slide-'+ cstr1).addClass('fadein')
    setTimeout(()=>
    {
      $('.course-slide-'+ cstr1).removeClass('fadein')
    },3000)
   
})
$(".larrow").on('click',()=>
{    
    if(count>1){
        count=count-1;
        console.log(count)
    }
   var cstr=count.toString()
    for(var i=1;i<=5;i++)
    {
        if(i!=count)
        {    var j=i.toString()
            $(".course-slide-"+j).css({"visibility":"hidden"})
        }
    }
    $('.course-slide-'+ cstr).css({"visibility":"visible"})
    $('.course-slide-'+ cstr).addClass('fadein')
    setTimeout(()=>
    {
      $('.course-slide-'+ cstr).removeClass('fadein')
    },1000)
    
})