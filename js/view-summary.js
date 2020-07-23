$(document).ready(function () {
    let URL = window.location.search;
    let param = new URLSearchParams(URL);

    let rootPage = param.get('page');
    $('#' + rootPage).addClass('active');

    console.log(rootPage);
})