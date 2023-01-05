// main.js

//큰 사진 변수에 저장


//작은 사진 변수에 저장

let s_img = document.querySelectorAll('.s_img')

// 반복문을 통해 목록 안에 썸네일 이미지 클릭 시 해당 이미지파일명이 나오도록 한다.

for(let i = 0; i < s_img.length; i++) {
    s_img[i].addEventListener('click', imgChange);
}

function imgChange() {
    let url = this.src;
/*    let big_url = './images/img_main_banner_160110.jpg';

    url = url.replace(big_url, url); */
    document.getElementById('photo').src=url;
}
