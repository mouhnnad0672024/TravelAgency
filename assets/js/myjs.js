$(document).ready(function(){
    $( "#checkin").datepicker();
    $( "#checkout").datepicker();
    $('.main-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        arrows: false,
    });

    function videoToggle()
    {
         let video = $(".myvideo")[0]; 
         if(video.paused)
         {
            video.play();
            $(".fa-circle-pause").show();
            $(".fa-circle-play").hide();
         }
         else{
            video.pause();
            $(".fa-circle-pause").hide();
            $(".fa-circle-play").show();
         }
    }

    $(".control").click(function()
    {
        videoToggle();
    })



  });