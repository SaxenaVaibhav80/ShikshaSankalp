

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
