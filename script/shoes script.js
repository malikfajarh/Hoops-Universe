
$(document).ready(function(){
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


    // $('#image1').each(function() {
    //     var link = $(this).html();
    //     $(this).contents().wrap('<a href="example.com/script.php?id="></a>');
    //   });



});

