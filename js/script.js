
// $(selector).action();




$(function(){



   
  $('.ab2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      nextArrow:'<i class="fas fa-chevron-right nxt"></i>',
      prevArrow:'<i class="fas fa-chevron-left prv"></i>',
    });

    $('.loader').fadeOut(1000);

    let i=$(".alex").offset().top;

    $(window).scroll(function(){
      let x=$(this).scrollTop();
      if(x>i)
      {
        $(".alex").addClass('menu_fix');


      }
      else{
        $(".alex").removeClass('menu_fix');


      }







    });

   $(this).scroll(function(){
      let ui=$(this).scrollTop();
      if(ui>300)
      {
        $('.btop').fadeIn(2000);
      }
      else{
        $('.btop').fadeOut(2000);


      }



   });

   $('.btop').click(function()
   {
     $('html,body').animate({
      scrollTop:0,


          },2000)

   });


   $('.content').scrollSpy({
    target: $('.menu li a')
}).scroll();
    
  
  });
  
  
  
  