$(document).ready(function() {


    $('#submit_contact').click(function(event) {

        var formEr = "";

        if ($("#contact_name").val() == "" || $("#contact_name").val() == null) {

            formEr = "yes";
            $("#name_error").text("Oops! Please we need your Full name!");
            $(".popup").css("display", "inherit");
            $('.contactform__form--inputbox-first input').css('border-bottom','solid 2px red');

        } else {

            if (!validateName($("#contact_name").val())) {

                formEr = "yes";
                $("#name_error").text("Please enter text only.");
                
            }
        }


        if ($('#contact_email').val() == '' || $('#contact_email').val() == null) {

            formEr = 'yes';
            $('#email_error').text('Please enter your email-address.');
            $(".popup").css("display", "inherit");
            $('.contactform__form--inputbox-second input').css('border-bottom','solid 2px red');

        } else {

            if (!validateEmail($('#contact_email').val())) {

                formEr = 'yes';
                $('#email_error').text('Please enter valid email-id.');

            }
        }

        if ($("#contact_number").val() == "" || $("#contact_number").val() == null) {

            formEr = "yes";
            $("#number_error").text("Please Enter Mobile No.");
            $(".popup").css("display", "inherit");
            $('.contactform__form--inputbox-third input').css('border-bottom','solid 2px red');
        } else {

            if (!validateNum($("#contact_number").val())) {

                formEr = "yes";
                $("#number_error").text("Oops! Incorrect Phone No. format!");

            }
        }


        if ($("#contact_message").val() == "" || $("#contact_message").val() == null) {
            

            formEr = "yes";
            $("#message_error").text("Please Enter Message");
            $(".popup").css("display", "inherit");
            $('.contactform__form--inputbox-fourth .contact-message').css('border-bottom','solid 2px red');
        }

        if ($('input[name="privacy"]:checked').length == 0) {
            formEr = "yes";
            $("#checkbox_error").text("Please accept our terms and conditions.");
        } 


        $("#contact_name").on("keyup", function() {
            $("#name_error").text("");
            $('.contactform__form--inputbox-first input').css('border-bottom','solid 2px green');
        });

        $("#contact_email").on("keyup", function() {
            $("#email_error").text("");
            $('.contactform__form--inputbox-second input').css('border-bottom','solid 2px green');
        });

        $("#contact_number").on("keyup", function() {
            $("#number_error").text("");
            $('.contactform__form--inputbox-third input').css('border-bottom','solid 2px green');
        });

        $("#contact_message").on("keyup", function() {
            $("#message_error").text("");
            $('.contactform__form--inputbox-fourth .contact-message').css('border-bottom','solid 2px green');
        });

        $(".check_privacy").change(function() {
            if(this.checked) {
                $("#checkbox_error").text("");
            }
        });


        if (formEr == 'yes') {
            return false;

        } else {
            
            // $("#contact_us_form").form().reset();
            
            // $('#contact_us_form').trigger("reset");
            $(".error").hide();
            $(".success").show();
            $('#contact_us_form').submit();
        }

    });


    function validateName($name) {
        var nameReg = /^[a-zA-Z ]*$/;
        return nameReg.test($name);
    }

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    function validateNum($number) {
        var numReg = /^[0-9]/gi;
        return numReg.test($number);
    }


    $('#contact_us_form').submit(function(){

        // alert("submit");
        $(".success").show();

    });
});
