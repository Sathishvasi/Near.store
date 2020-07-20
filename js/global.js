var API_HOST_URL = 'http://criczz.us-east-2.elasticbeanstalk.com/criczz/';

function validateNull(value) {
    return value === null ? 0 : value;
}

function validateNullObj(val) {
    return Object.keys(val).forEach(function (key) {
        if (val[key] === null) {
            val[key] = '-';
        }
    })
}

function showSnackBar(msg) {
    $("#snackbar").addClass("show");
    $("#snackbar").text(msg);
    setTimeout(function () {
        $("#snackbar").removeClass("show");
    }, 3000);
}
