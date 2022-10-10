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

    
    const form = document.getElementById("myForm")
    const errorMassage = document.getElementById("errorMassage")

    function handleSubmit(e){
    const formData = new FormData(form)

    const user = formData.get('userTxt')
    const phone = formData.get('phoneTxt')
    const email = formData.get('emailTxt')
    const gender = formData.get('gender')
    const age = formData.get('ageTxt')
    const district = formData.get('districtTxt')
    const address = formData.get('AddressTxt')
    const postal = formData.get('postalTxt')
    const additional = formData.get('additionalTxt')
    
    
    let error = []

    //VALIDATION
    if(!user){
        error.push("Name cannot be empty!")
    }

    if(phone.length > 12){
        error.push("Phone Number can't exceed 12!")
    }

    if(!phone){
        error.push("Phone Number cannot be empty!")
    }

    if(!email){
        error.push("Email cannot be empty!")
    }
    
    if(!gender){
        error.push("Gender cannot be empty!")
    }

    if(!age){
        error.push("Age cannot be empty!")
    }

    if(!district){
        error.push("District cannot be empty!")
    }

    if(!address){
        error.push("Address cannot be empty!")
    }

    if(!postal){
        error.push("Postal Code cannot be empty!")
    }


    if(error.length > 0){
        alert(error.join("\n"))
        errorMassage.innerHTML = console.error.join("</br>")
        e.preventDefault()
    }else{
        if(!confirm("Are you sure?")){
            e.preventDefault()
        }
    }
    }

    form.addEventListener('submit', handleSubmit)




});


