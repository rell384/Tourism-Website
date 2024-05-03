$(window).ready(function () {
    let sectionTwo = $(".Serivces").offset().top;
 
    //about header
    $("#about-header").slideDown(1000);
 //section2

 $(".Serivces").animate(500, () => {
    $(".Serivces .head").slideDown(500);
});
    $(".Serivces  ").animate(3000, () => {

        $(".row1 .service1").show(1000, () => {
            $(".row .service2").show(1000, () => {
                $(".row .service3").show(1000, () => {
                    $(".row .service4").show(2000, () => {
                        $(".row2 .service1").show(2000, () => {
                            $(".row2 .service2").show(2000, () => {
                                $(".row2 .service3").show(2000, () => {
                                    $(".row2 .service4").show(2000, () => {
                                        $(".row3 .service1").show(3000, () => {
                                            $(".row3 .service2").show(3000, () => {
                                                $(".row3 .service3").show(3000, () => {
                                                    $(".row3 .service4").show(3000);
                                                })
                                            });
                                        })
                                    });
                                });
                            })
                        });
                    })
                });
            })
        });
    })

    //arrow        
    $(window).scroll(() => {
        if (sectionTwo < $(window).scrollTop()) {
            $(".arrow_up").fadeIn(1000);
        }
        if ($(window).scrollTop() == 0) {
            $(".arrow_up").fadeOut(1000);
        }


    });

    $(".arrow_up").click(() => {
        $("html ,body").animate({ scrollTop: 0 }, 2000);
    })





})
