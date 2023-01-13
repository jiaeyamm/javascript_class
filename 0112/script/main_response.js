$(function(){

    let gnb = $('.gnb');
    
    // gnb에 마우스를 오버 시 
    gnb.mouseenter(function(){
        $('#h_bottom').stop().animate({'height':'320px'}, 1000, 'easeInExpo');
        $('.sub').delay(1000).fadeIn(800);
    })

    // 메인 메뉴에 마우스를 빼면 
    
    gnb.mouseleave(function() {
        $('#h_bottom').stop().animate({'height':'46px'}, 1000, 'easeInExpo');
        $('.sub').delay(300).fadeOut();
    })

    $()

    // 메인 좌, 우 슬라이드

    let = img_w = $('.slide img').width();
    $(window).resize(function(){
        img_w = $('.slide img').width();
        $('.slide ul').css('margin-left', -img_w);
    })

    // 1.5번 이미지를 1번의 앞쪽으로 자리를 재배치한다.

    $('.slide li:last-child').insertBefore('.slide li:first-child');    
    
    // -1600px하여 맨마지막사진(자리 재배치한) 왼쪽으로 이동
    $('.slide ul').css('margin-left', -img_w);

    // 2. 움직이는 함수 만들기
    function moveLeft() {
        // 왼쪽으로 3200만큼 이동하고
        $('.slide ul').animate({'margin-left': -img_w*2}, 500, function(){
            // 왼쪽 첫번째 li 태그를 마지막 li태그를 뒤쪽에다가 자리를 옮긴다.
            $('.slide li:first-child').insertAfter('.slide li:last-child');
            $('.slide ul').css('margin-left', -img_w);
        });
    }

    function moveRight() {
        $('.slide ul').animate({'margin-left': '0px'}, 500, function(){
            // 오른쪽 마지막 li 태그를 왼쪽 첫번째 li 태그 앞에 배치한다.
            $('.slide li:last-child').insertBefore('.slide li:first-child');
            $('.slide ul').css('margin-left', -img_w);
        });
    }


    // 3. 시간 객체로 3초마다 함수 호출하기
    let Timer = setInterval(moveLeft, 3000);

    // 4. 좌, 우 버튼 클릭 시 각각 해당하는 함수 호출하여 움직이게 하기

    let leftBtn = $('.slide i.fa-angle-left');
    let rightBtn = $('.slide i.fa-angle-right');


    leftBtn.click(function(){
        moveLeft();
    })
    
    
    rightBtn.click(function(){
        moveRight();
    })

        // 좌, 우 버튼에 마우스 오버 시 시간을 제거해서 슬라이드 멈추게하고 
        $('.slide i.fas').hover(function(){
            clearInterval(Timer);
        }, function() {
            Timer = setInterval(moveLeft, 3000);
        })

})