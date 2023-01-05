let n = 1;
const img_list = document.querySelectorAll('.lnb > li');
const left_btn = document.querySelector('.fa-angle-left');
const right_btn = document.querySelector('.fa-angle-right');



document.getElementById('page').innerHTML = n + ' / 16'

img_list.forEach((el, index) => {
    el.onclick=()=> {
        n = index + 1; // 1인덱스 번호에 1을 더하여 1부터 숫자 나오게
        document.getElementById('page').innerHTML = n + ' / 16'
        document.getElementById('photo').src = './image44/movie_image' + n + '.jpg';
    }
})

left_btn.addEventListener('click', function() {
    if(n == 1) {
        n=16;
    } else {
        n--;
    }
    console.log(n);
})

right_btn.addEventListener('click', function() {
    if(n==16) {
        n=1;
    } else {
        n++;
    }
    console.log(n);
})