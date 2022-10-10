$(document).ready(function(){
    // var visible = false;

    // var visibleGallery = false;
    // var visibleStory = false;

    var slideCount = $('#slider div.slides div.slide').length;

    var slideWidth = $('#slider div.slides div.slide').width();
    var slideHeight = $('#slider div.slides div.slide').height();

    $('#slider').css({width:slideWidth, height:slideHeight});
    $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth});

    //dalem sini - dijalanin setelah page html ke load

    //NAVBAR ANIMATION
    (function($){
        $(function(){
    
            $('.navigation ul li a:not(:only-child)').click(function(e){
                $(this).siblings('.drop-down').toggle();
                $('.drop-down').not($(this).siblings()).hide();
                e.stopPropagation();
            });
    
            $('html').click(function(){
                $('.drop-down').hide();
            });
            
            $('#navigation-toggle').on('click', function(){
                this.classList.toggle('active');
            });
    
            $('#navigation-toggle').click(function(){
                $('.navigation ul').slideToggle();
            });
            
        });
    })(jQuery);




    //SLIDER BUTTON TRIGGER TO MOVE
    $('#laquo').click(function(){
        $('#slider div.slides').animate({left:+slideWidth}, 1000, function(){
            $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');
            $('#slider div.slides').css('left', '');
        });
    });

    $('#raquo').click(function(){
        $('#slider div.slides').animate({left:-slideWidth}, 1000, function(){
            $('#slider div.slides div.slide:first-child').appendTo('#slider div.slides');
            $('#slider div.slides').css('left', '');
        });
    });


    //RESPONSIVE SLIDER
    $(window).resize(function() {   //FOR UNDER 1300PX
        if (window.matchMedia('(max-width: 1300px)').matches) {
            var slideCount = $('#slider div.slides div.slide').length;
            var slideWidth = $('#slider div.slides div.slide').width();
            var slideHeight = $('#slider div.slides div.slide').height();

            $('#slider').css({width:slideWidth, height:slideHeight});
            $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth});

        }

        //FOR 1300PX Normal
        if (window.matchMedia('(min-width: 1300px)').matches) {
            var slideCount = $('#slider div.slides div.slide').length;

            var slideWidth = $('#slider div.slides div.slide').width();
            var slideHeight = $('#slider div.slides div.slide').height();

            $('#slider').css({width:slideWidth, height:slideHeight});
            $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth});

        
        }

        //UNDER 1025 PX TABLET
        if (window.matchMedia('(max-width: 1025px)').matches) {
            var slideCount = $('#slider div.slides div.slide').length;
            var slideWidth = $('#slider div.slides div.slide').width();
            var slideHeight = $('#slider div.slides div.slide').height();

            $('#slider').css({width:slideWidth, height:slideHeight});
            $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth});

        }

        
        //UNDER 705 PX PHONE
        if (window.matchMedia('(max-width: 705px)').matches) {
            var slideCount = $('#slider div.slides div.slide').length;
            var slideWidth = $('#slider div.slides div.slide').width();
            var slideHeight = $('#slider div.slides div.slide').height();

            $('#slider').css({width:slideWidth, height:slideHeight});
            $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth});

        }

    });
    

    //SLIDE ANIMATION FOR RESPONSIVE SIZE BUT IT WILL BUG THE SLIDER
    // $('#laquo').click(function(){
    //     var $this = $(this)
    //     if($this.data('clicked', true)){
    //         $('#slider div.slides').animate({left:+slideWidth}, 1000, function(){
    //             $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');
    //             $('#slider div.slides').css('left', '');
    //         });
    //     }
    // })


    // $('#raquo').click(function(){
    //     var $this = $(this)
    //     if($this.data('clicked', true)){
    //         $('#slider div.slides').animate({left:-slideWidth}, 1000, function(){
    //             $('#slider div.slides div.slide:first-child').appendTo('#slider div.slides');
    //             $('#slider div.slides').css('left', '');
    //         });

    //     }

    // })




    //SLIDE ANIMATION
    var width = 1100;
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    // var $slideContainer = $('#laquo','#raquo');
    

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({
                'margin-left': '-=' + width
            },animationSpeed, function() {
                if (++currentSlide === $slides.length +1) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
    clearInterval(interval);
    }

    


    $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider);

    $('#laquo').mouseenter(function(){
        pauseSlider()
    })

    $('#laquo').mouseleave(function(){
        startSlider()
    })

    $('#raquo').mouseenter(function(){
        pauseSlider()
    })

    $('#raquo').mouseleave(function(){
        startSlider()
    })

    startSlider();




});

