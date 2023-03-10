$(function() {

    // 1. 변수선언

    let g_navi = $('.g_navi a');
    let g_list = $('.g_list a');
    let total_btn = $('.g_navi li:first-child a');
    let plan_btn = $('.g_navi li:nth-child(2) a');
    let de_btn = $('.g_navi li:nth-child(3) a');
    let ui_btn = $('.g_navi li:nth-child(4) a');
    let codi_btn = $('.g_navi li:last-child a');
    let total_num =$('.g_list a').length;

    console.log(total_num);

    // 2. 메뉴 클릭 이벤트와 서식 적용

    g_navi.click(function() {
        $('.g_navi a').removeClass('act');
        $(this).addClass('act');
        return false; // 새로고침 방지
        /* e.preventDefault(); */
    })

    // 3. 이미지 목로겡 마우스 오버시 캡션 나오게
    g_list.hover(function() {
        $(this).find('span').stop().animate({'bottom':'0px'}, 300);
    }, function() {
        $(this).find('span').stop().animate({'bottom':'-40px'}, 300);
    });

    
    // 4. 이미지 클릭 시 해당 src값을 가져와 모달윈도 띄우기
    g_list.click(function() {
        let src = $(this).attr('href');
        let title = $(this).find('span').text(); // 내용을 가져온다.
        let i_num = $(this).parent().index()+1; // this = a 태그
        console.log(src);
        console.log(i_num);

        let modal = `
        <div class="modal">
            <div class="center">
                <h3>${title}</h3>
                <img src=${src} alt="">
                <span class="page_num"></span>
                <i class="fas fa-times"></i>
                <i class="fas fa-angle-left"></i>
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
        `;
        
        $('body').append(modal);
        $('.modal .page_num').text(i_num + '/' + total_num);

    // 4-2. 닫기 버튼 누르면 모달창 숨기기
        $('.modal i.fa-times').click(function(){
            $('.modal').fadeOut();
        })

    // 4-3. 좌우 버튼 클릭 시 각각 해당 이미지가 나오게 하기
        $('.modal i.fa-angle-left').click(function(){
            moveLeft();
            $('.modal .page_num').text(i_num + '/' + total_num);
        })

        $('.modal i.fa-angle-right').click(function() {
            moveRight();
            $('.modal .page_num').text(i_num + '/' + total_num);
        })


        function moveLeft() {
            if(i_num == 1) {
                i_num = 12;
            } else {
                i_num--;
            }
            console.log(i_num);
            $('.modal h3').text($('.g_list > li').eq(i_num).find('span').text());
            img_check();

/* 
            $('.modal img').attr('src','./images/img'+i_num+'.png');
*/

        }

        console.log(i_num);
        function moveRight() {
            if(i_num == 12) {
                i_num = 1;
            } else {
                i_num++;
            }
            console.log(i_num);
            $('.modal h3').text($('.g_list > li').eq(i_num).find('span').text());
            img_check();
        }
        // 4-4. 인덱스 번호가 4, 9, 11일 때 확장자를 png로 교체해주는 함수

        function img_check() {
            if(i_num == 4||i_num == 9||i_num == 11) {
                $('.modal img').attr('src','./images/img'+i_num+'.png');
            } else {
                $('.modal img').attr('src','./images/img'+i_num+'.jpg');
            }
        }
    
        return false;
    })


    // 5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게 하기 

    plan_btn.click(function() {
        $('.total').hide(); // 모두 숨기고
        $('.plan').fadeIn(); // 해당 목록만 보이게 한다.
    })
    
    ui_btn.click(function() {
        $('.total').hide(); // 모두 숨기고
        $('.ui').fadeIn(); // 해당 목록만 보이게 한다.
    })
    
    codi_btn.click(function() {
        $('.total').hide(); // 모두 숨기고
        $('.coding').fadeIn(); // 해당 목록만 보이게 한다.
    })

    de_btn.click(function() {
        $('.total').hide(); // 모두 숨기고
        $('.design').fadeIn(); // 해당 목록만 보이게 한다.
    })

    total_btn.click(function() {
        $('.total').hide(); // 모두 숨기고
        $('.total').fadeIn(); // 모두 보이게 한다.
    })

})