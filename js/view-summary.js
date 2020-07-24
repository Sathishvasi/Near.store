$(document).ready(function () {
    let URL = window.location.search;
    let param = new URLSearchParams(URL);

    let rootPage = param.get('page');
    $('#' + rootPage).addClass('active');

    $('.details').show()

    console.log(rootPage);
})