
// 1. 변수를 몇개 선언해야 할지 생각

const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const l_btn = document.getElementById('prev_btn');
const r_btn = document.getElementById('next_btn');
const btn = document.querySelectorAll('.button');

const img_n = slide_img.length; // 목록의 갯수

console.log(img_n); // 5

const img_w = 100;
const s_con = 1;

let count = 0;


// 감싸는 부모요소의 너비를 구하기

slide.style.width = img_w * img_n + '%';

// 300 + 30 * 5 - 30 = 1620px

// 3초마다 반복해서 호출되며, 왼쪽으로 움직이는 슬라이드 함수

function mslide(n) {
    slide.style.left = img_w *- n + '%';
    count = n;
    console.log(slide.style.left); // -330, -660, 0
    console.log(count);
}


//  왼쪽 버튼 클릭시 왼쪽 방향으로 움직이게 한다.
l_btn.addEventListener('click', function() {
    if(count > 0) {
        mslide(count - 1);
    } else {
        mslide(img_n-s_con); 
    }
clearInterval(timer);
})

// 오른쪽 버튼 클릭 시 오른쪽 방향으로 움직이게 된다.

r_btn.addEventListener('click', function() {
    if (count < img_n-s_con) {
        mslide(count+1); 
    } else {
        mslide(0);
    }
    clearInterval(timer);
})

// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
// 시간 객체 setinterval(함수명, 시간)

let timer = setInterval(function() {
    if (count < img_n-s_con) {
        mslide(count+1); 
    } else {
        mslide(0);
    }
}, 5000);

// 마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하여 자동으로 움직이게 한다.


    l_btn.addEventListener('mouseout', function() {
        timer = setInterval(function() {
            if(count < img_n-s_con) {
                mslide(count+1);
            } else {
                mslide(0);
            }
        }, 5000);
})


    r_btn.addEventListener('mouseout', function() {
    timer = setInterval(function() {
        if(count < img_n-s_con) {
            mslide(count+1);
        } else {
            mslide(0);
        }
    }, 5000);
})