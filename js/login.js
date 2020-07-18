(function ($) {
    "use strict";

    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })

    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check) {
            const userCredential = {
                "userName": $('#username').val(),
                "password": $('#password').val()
            }
            $.ajax({
                url: 'http://criczz.us-east-2.elasticbeanstalk.com/criczz/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                data: userCredential,
                success: function (data) {
                    console.log('succes: ' + data);
                    check = true;
                },
                error: function (xhr) {
                    alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
                    showSnackBar(xhr)
                    check = false;
                }
            });
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showSnackBar(msg) {
        $("#snackbar").addClass("show");
        $("#snackbar").text(msg);
        setTimeout(function () {
            $("#snackbar").removeClass("show");
        }, 3000);
    }

    function validate(input) {
        if ($(input).val().trim() == '') {
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);