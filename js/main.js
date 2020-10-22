//carousel shop
const responsive = {
  0:{
      items:1
  },
  320:{
      items: 1
  },
  560:{
      items: 2
  },
  960:{
      items: 3
  },
  1200:{
      items:4
  }
}
//loader
$('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  AOS.refresh();
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}
//end loader



$(document).ready(function(){
      
  

    /** header nav */
   $topInfo = $('.top-info-wrapper');
   $navBar= $('.nav-bar');
   $hamburger= $('.hamburger')

   $(window).scroll(function(){
       scroll =$(window).scrollTop();

       if(scroll >= 100)$navBar.css('background','rgba(0, 0,0,.9)'), $topInfo.css('display','none')
       else $topInfo.css('display','flex'),$navBar.css('background','transparent') ;
   })
   //nav bar toggle
   $('.hamburger').click(function(){
     $hamburger.toggleClass('active');
     $('.nav-list ul').toggleClass('active');
     $('.nav-bar').toggleClass('active')
   })
   $('#inner-scroll').click(function(){
    $hamburger.toggleClass('active');
    $('.nav-list ul').toggleClass('active');
    $('.nav-bar').toggleClass('active')
   })
   

    /**owl-carousel  */
    $('.slider-wrapper .owl-carousel').owlCarousel({
        
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        items:1,
        animateOut: 'fadeOut',
        nav:false,
        dots:false,
        mouseDrag:false        
    });  
    $('.products-wrapper .owl-carousel').owlCarousel({        
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        items:4,
        nav:false,
        responsive: responsive        
    });  
    $('.testmonials.about-p .owl-carousel').owlCarousel({        
        loop:true,
        autoplay:true,
        autoplayTimeout:9000,
        items:1,
        nav:false
    })  

    //counter   
       var counted = 0;
       $(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
AOS.init({
    once:true
});
    
})

  

