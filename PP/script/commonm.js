$(function() {

    let m_gnb = $('.toggle span');

    $(m_gnb).click(function() {
        $('.toggle span:nth-child(2)').toggleClass('none');
        $('.toggle span:first-child').toggleClass('first');
        $('.toggle span:last-child').toggleClass('three');
    })

})