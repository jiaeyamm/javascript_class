$(function() {



   
    $(window).scroll(function() {
           // 스크롤 기능을 사용하여 header, gnb에 서식 적용하기
         let sPos = $(this).scrollTop();
         console.log(sPos);

         if(sPos >= 800) {
            $('header').addClass('h_on');
            $('header .gnb a').addClass('on');
            $('header h1 img').attr('src', './images/logo-casper.e03ec84.png');
            $('header i.fas').addClass('on');
         } else {
            $('header').removeClass('h_on');
            $('header .gnb a').removeClass('on');
            $('header h1 img').attr('src', './images/logo-casper-white.028f418.png');
            $('header i.fas').removeClass('on');
         }
    })


    // 헤더에 마우스 오버 시 로고, 내비게이션, i.fas 서식 적용하고 
    $('header').hover(function() {
        $(this).addClass('h_on');
        $('header .gnb a').addClass('on');
        $('header h1 img').attr('src', './images/logo-casper.e03ec84.png');
        $('header i.fas').addClass('on');
    }, function() {
        $(this).removeClass('h_on');
        $('header .gnb a').removeClass('on');
        $('header h1 img').attr('src', './images/logo-casper-white.028f418.png');
        $('header i.fas').removeClass('on');

    })

    // header에 마우스 아웃시 로고, 내비게이션, i.fas에 서식 제거하기 

    // 아래로 이동하기 버튼을 클릭시 top 콘텐츠가 상단 940 높이로 올라오게 하기

    $('#next_btn').click(function(){
        let he = $('#top3').offset().top - 70;
        $('html, body').animate({scrollTop:he}, 500, 'easeOutQuint');

        // $('html, body').animate({scrollTop:$('#top3').offset().top - 70}, 500, 'easeOutQuint');
    })

    let mnu =  $('header .gnb > li');
    let mnu2 = $('#m_nav li')

        // 내비게이션 클릭 시 해당 콘텐츠가 상단으로 올라오게 하기
/*    mnu.click(function() {
         let n = $(this).index();
         $('html, body').animate({scrollTop:$('section').eq(n+2).offset().top-70}, 700, 'easeOutQuint');
         return false;

})
    mnu2.click(function() {
        let j = $(this).index();
        $('html, body').animate({scrollTop:$('section').eq(j+2).offset().top-70}, 700, 'easeOutQuint');
        return false;
    }) */

    let mnu3 = $('header .gnb li, #m_nav li');
    mnu3.click(function() {
        let n = $(this).index();
        $('html, body').animate({scrollTop:$('section').eq(n+2).offset().top-70}, 700, 'easeOutQuint');
        return false;
    })

})
