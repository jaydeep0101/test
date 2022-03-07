$(document).ready(function() {
    jQuery.validator.addMethod('email_rule', function(value, element) {

        if (/^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value)) {
            return true;

        } else {

            return false;
        };
    });


    jQuery.validator.addMethod('checkbox_rule', function(value, element) {

        var ckb_status = $("#contact_checkbox").prop('checked');
        if (ckb_status) {
            return true;
        } else {
            return false;
        }

    });



    $('#contact_us_form').validate({
        focusInvalid: true,
        rules: {
            contact_name: "required",
            "contact_email": {
                required: true,
                email_rule: true
            },
            "contact_number": {
                required: true,
                number: true
            },
            "contact_message": {
                required: true,
            },
            agree: "required"

        },
        messages: {
            contact_name: "Oops! Please we need your Full name!",
            contact_email: "Oops! Incorrect Email format!",
            contact_number: "Oops! Incorrect Phone No. format!"

        },
        highlight: function(element) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function(element) {
            $(element).removeClass("is-invalid");
        },
        submitHandler: function(form) {
            form.submit();
        },
    });
});