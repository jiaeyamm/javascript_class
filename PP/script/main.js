$(function() {



    const c_btn = $('#visual_slide .slide_tab li');
    c_btn.click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });

    
    let m_img = $('#visual_slide .slide_wrap .slide_img');

    console.log(m_img);

    let n = 0;
    function SlideZ () {
        m_img.eq(n).stop().addClass('slideZ');
        m_img.stop().removeClass('slideZ');

        if(n==10) {
            n = 0;
        } else {
            n++;
        }
    }
    
    let Timer2 = setInterval(SlideZ, 2500);

    /*
    $(window).scroll(function() {
        let spos = $(this).scrollTop();

        console.log(spos);

        let dh = $(document).height();

        console.log(dh);

        if(dh/2 < spos) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
*/
    $('.top_btn').click(function() {
        $('html, body').animate({scrollTop:'0px'}, 700);
    })

    //ajax 메서드로 json 데이터 불러오기
    $('.more_box a').click(function() {
        $(this).hide();       

        $.ajax({
            url:'./script/product.json',
            type: 'get',
            dataType:'json',
            success:function(result) {
                let t = '<ul>';
                $.each(result.product,function(i,e){
                    t+="<li><img src='./image/"+e.path+"'alt='"+e.tit+"'></li>";
                });
                t+="</ul>";

                $('#list').html(t);
;            }

        })
    })

});

// 이벤트 슬라이드 


// 1. 변수 선언

const sw = document.querySelector('.s_wrap');
const lb = document.querySelector('.e_slide .left_btn');
const rb = document.querySelector('.e_slide .right_btn');

let cont = 0;
let sn = document.querySelectorAll('.s_wrap figure').length;


const fig = 1200; // 

/// const fig =  document.querySelector('#event article').offsetWidth;

console.log(sn);

sw.style.Width = fig*sn;


// 2. 클릭 시 위치 이동

lb.addEventListener('click',()=> {
    if(cont > 0) {
        clearInterval(Timer);
        mslide(cont-1)
    } else {
        mslide(0);
    }
});

rb.addEventListener('click',()=> {
    if(cont < sn-1) {
        clearInterval(Timer);
        mslide(cont+1);
    } else {
        mslide(0);
    }
});

lb.addEventListener('mouseleave', ()=> {
    let Timer = setInterval(function() { // 3초마다 0, 1, 2 를 mslide를 넘겨줌
        if(cont < sn-1) {
            mslide(cont+1);
        } else {
            mslide(0);
        }
    }, 3000)
})

rb.addEventListener('mouseleave', ()=> {
    let Timer = setInterval(function() { // 3초마다 0, 1, 2 를 mslide를 넘겨줌
        if(cont < sn-1) {
            mslide(cont+1);
        } else {
            mslide(0);
        }
    }, 3000)
})


// 3. 버튼을 클릭하지 않아도 자동으로 움직이는 슬라이드.

function mslide(n) {
    sw.style.marginLeft = fig*-n+'px';
    cont = n;
}

let Timer = setInterval(function() { // 3초마다 0, 1, 2 를 mslide를 넘겨줌
    if(cont < sn-1) {
        mslide(cont+1);
    } else {
        mslide(0);
    }
}, 3000)



// 자바스크립트로 top_btn 

window.addEventListener('scroll', ()=> {
    console.log(window, scrollY);
    let ws = window.scrollY;
    console.log(ws);
    if(ws>=1500) {
        document.querySelector('.top_btn').style.display = 'block';
    } else {
        document.querySelector('.top_btn').style.display = 'none';
    }
} )