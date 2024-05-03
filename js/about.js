$(window).ready(function () {
    let sectionTwo = $(".About-content").offset().top;
    let sectionThere=$("#test2").offset().top;
    let SectionFour=$("#test3").offset().top;

    //about header
 $("#about-header").slideDown(1000);
    
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
       
        //section3
        
        if(sectionThere  <  $(window).scrollTop() ){

             $(".Reasons .text").animate(500,()=>{
                $(".Reasons .text").slideDown(500);
            })
            $(".Reasons").animate(1000,()=>{
                
               $(".box1").show(1000,()=>{
                $(".box2").show(1000,()=>{ 
                    $(".box3").show(1000)
                    });
               })
            })
        }
       
        //section 4
        if(SectionFour < ($(window).scrollTop()) ){
 
            $(".our_guid .head").animate(2000,()=>{
                $(".our_guid .head").slideDown(1000);
            })
            $(".our_guid").animate(2000,()=>{
                $(".person1").show(1000,()=>{
                 $(".person2").show(1000,()=>{ 
                     $(".person3").show(1000,()=>{
                        $(".person4").show(1000); 
                     })
                     });
                })
             })  
        }



    })
    $(".arrow_up").click(() => {
       $("html ,body").animate({ scrollTop:0},2000);
   })
  
 



})
 