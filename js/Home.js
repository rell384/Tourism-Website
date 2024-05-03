// Testimonials carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items:5,
        margin:10,
        loop:true,
        touchDrag:true,
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
       nav : false,
        responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }

});
});
// $(document).ready(function () {
//     let navbar = $(".navbar");
//     if ($(window).scrollTop() > 0) {
//         navbar.css({"background": "white"});
//     } else {
//         navbar.css({"background": "transparent"});
//     }

//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 0) {
//             navbar.css({"background": "white"});
//         } else {
//             navbar.css({"background": ""});
//         }
//     });
// });
//   function toggleScroll() {
//       let body1 =document.body;
//         if (body.style.overflow === 'hidden') 
//         {
//             body.style.overflow = '';
//         } 
//         else {
//             body.style.overflow = 'hidden';
//         }
//     }
//     window.addEventListener('scroll', function () {
//         var navbar = document.getElementById('main-nav');
//         navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
//       });
      /*slider */
     
    
(function($) {
    $.fn.crossslider = function(options) {
      var slider = $(this);
  
      var settings = $.extend(
        {
          duration: 1000, //Duration of animation in miliseconds.
          containerWidth: 1450, //container width to add max-width for content in slides.
  
          //List of slider elements:
          left_half: ".left-half",
          right_half: ".right-half",
          content: ".slide-content",
          slides: ".slide",
  
          //Navigation elements:
          next_button: ".next-slide",
          prev_button: ".prev-slide",
  
          //CSS Classes
          active_slide: 'active',
          disabled_nav: 'disabled',
        },
        options
      );
  
      $(settings.slides).each(function(index) {
        $(this).css({ "z-index": index });
      });
  
      //List of elements:
      var left_half = $(settings.left_half);
      var right_half = $(settings.right_half);
      var content = $(settings.content);
  
      //check support for Clip Path property
      if (!areClipPathShapesSupported()) {
        $(left_half).css({ width: "50%" });
          $(right_half).css({ width: "50%" });
      }
  
      function setContentWidth() {
        if ($(window).width() > settings.containerWidth) {
          var offset = ($(window).width() - settings.containerWidth) / 2;
        } else {
          var offset = 0;
        }
        $(left_half).find(content).css({ left: offset + "px" });
        $(right_half).find(content).css({ right: offset + "px" });
      }
      setContentWidth();
      $(window).on("resize", setContentWidth);
      //Add active class on first slide.
      $(settings.slides).first().addClass(settings.active_slide);
      if($(settings.slides).length > 1) {
        $(settings.prev_button).addClass(settings.disabled_nav);
      } else {
        $(settings.prev_button).addClass(settings.disabled_nav);
        $(settings.next_button).addClass(settings.disabled_nav);
      }
      //show first slide on page load.
      slideIn();
  
      function slideIn() {
        //animate slide in for current slide
        $(slider).find("."+settings.active_slide).find(left_half).animate(
          {
            left: "0%"
          },
          settings.duration
        );
        $(slider).find("."+settings.active_slide).find(right_half).animate(
          {
            right: "0%"
          },
          settings.duration
        );
  
        //fadeout and scale down previous slide
        if ($(slider).find("."+settings.active_slide).prev(settings.slides).length > 0) {
          $(slider).find("."+settings.active_slide).prev(settings.slides).css({
            transform: "scale(.75)",
            opacity: "0"
          });
        }
  
        //activate "Prev Slide" link
        if ($(slider).find("."+settings.active_slide).prev(settings.slides).length > 0) {
          $(settings.prev_button).removeClass(settings.disabled_nav);
        }
  
        //deactivate "Next Slide" link when last slide is reached
        if ($(slider).find("."+settings.active_slide).next(settings.slides).length == 0) {
          $(settings.next_button).addClass(settings.disabled_nav);
        }
      }
  
      function slideOut() {
        //fadein and scale up previous slide
        $(slider).find("."+settings.active_slide).prev(settings.slides).css({
          transform: "scale(1)",
          opacity: "1"
        });
  
        //animate slide our for current slide
        $(slider).find("."+settings.active_slide).find(left_half).animate(
          {
            left: "-61%"
          },
          settings.duration
        );
        $(slider).find("."+settings.active_slide).find(right_half).animate(
          {
            right: "-61%"
          },
          settings.duration
        );
  
        //activate "Next Slide" link
        $(settings.next_button).removeClass(settings.disabled_nav);
  
        //deactivate "Prev Slide" link when first slide is reached
        if ($(slider).find("."+settings.active_slide).prev(settings.slides).length == 0) {
          $(settings.prev_button).addClass(settings.disabled_nav);
        }
      }
  
      $(settings.next_button).on("click", function(e) {
        e.preventDefault();
        var el = $("."+settings.active_slide);
        if (el.next(settings.slides).length > 0) {
          el.removeClass(settings.active_slide);
          el.next(settings.slides).addClass(settings.active_slide);
        }
        slideIn();
      });
  
      $(settings.prev_button).on("click", function(e) {
        e.preventDefault();
        var el = $("."+settings.active_slide);
  
        if (el.prev(settings.slides).length > 0) {
          slideOut();
          el.removeClass(settings.active_slide);
          el.prev(settings.slides).addClass(settings.active_slide);
        }
  
        //deactivate "Prev Slide" link when first slide is reached
        if ($("."+settings.active_slide).prev(settings.slides).length == 0) {
          $(this).addClass(settings.disabled_nav);
        }
      });
  
      //function to detect support for Clip Path property
      function areClipPathShapesSupported() {
        var base = "clipPath",
          prefixes = ["webkit", "moz", "ms", "o"],
          properties = [base],
          testElement = document.createElement("testelement"),
          attribute = "polygon(50% 0%, 0% 100%, 100% 100%)";
  
        // Push the prefixed properties into the array of properties.
        for (var i = 0, l = prefixes.length; i < l; i++) {
          var prefixedProperty =
            prefixes[i] + base.charAt(0).toUpperCase() + base.slice(1); // remember to capitalize!
          properties.push(prefixedProperty);
        }
        // Interate over the properties and see if they pass two tests.
        for (var i = 0, l = properties.length; i < l; i++) {
          var property = properties[i];
  
          // First, they need to even support clip-path (IE <= 11 does not)...
          if (testElement.style[property] === "") {
            // Second, we need to see what happens when we try to create a CSS shape...
            testElement.style[property] = attribute;
            if (testElement.style[property] !== "") {
              return true;
            }
          }
        }
        return false;
      }
      return this;
    };
  })(jQuery);


  //  Start about 
  $(window).ready(function () {
    let sectionTwo = $(".About-content").offset().top;
    

    
    
    //section 2
     
        $(".About-content").animate(2000,function(){
           $(".About-content .image").fadeIn(2000,()=>{
               $(".About-content .content").show(3000);
           });
       })
       //arrow        
    $(window).scroll(() => {
         if (sectionTwo < $(window).scrollTop()) {
            $(".arrow_up").fadeIn(1000);
        }
        if($(window).scrollTop() == 0){
            $(".arrow_up").fadeOut(1000); 
        }
       
      });
      
        
    $(".arrow_up").click(() => {
       $("html ,body").animate({ scrollTop:0},2000);
   })
    }
 

  );

 // end about