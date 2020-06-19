$(document).ready(function () {
    let str = window.location.href;
    let ID = str.substr(str.lastIndexOf("=")+1,str.lastIndexOf("/"));
    console.log(ID)

    // Appending Status dynamically
    $('.details__header .status-content').text('IND got a wicket');
    $('.details__header .status-content').addClass('show-stat');

    $(".slider").slick({
        slidesToShow: 6,
        infinite: false,
        arrows: false,
        slidesToScroll: 6
    })
})