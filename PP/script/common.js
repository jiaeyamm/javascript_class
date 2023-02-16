let gnb = document.querySelectorAll('.gnb li');
let sub = document.querySelectorAll('.gnb .sub');

let m_area01 = document.querySelector('main');
let m_area02 = document.querySelector('footer');


for(let i=0; i < gnb.length; i++) {
    gnb[i].addEventListener('click', ()=> {
        const child = gnb[i].children;


        for(let j=0; j<sub.length; j++) {
            sub[j].style.display='none';
        }

        child[1].style.display='block';
    })
}


