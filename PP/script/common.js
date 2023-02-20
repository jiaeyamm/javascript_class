let gnb = document.querySelectorAll('.gnb li');
let sub = document.querySelectorAll('.gnb .sub');

let area = document.querySelector('main');
let area2 = document.querySelector('footer');





for(let i=0;i < gnb.length;i++){
    gnb[i].addEventListener('click',()=>{
        // alert('클릭 맞아요..');
        //console.log(gnb[i]);
        const child = gnb[i].children;
        //console.log(child[1]);
        
        //li태그 안에 있는 .sub모두 숨기기
        for(let j=0;j< sub.length;j++){
          sub[j].style.display='none';
        }
  
        //내가 선택한 li의 sub만 나오게
        if(child.length > 1) child[1].style.display='block';

        // $(this).find('.sub').show();
  
        //$(this).parent().siblings().find('.sub').hide();
        
    });
  }

  document.addEventListener('click', (e)=> {
    let temp = e.target.parentNode.parentNode.classList.contains('gnb'); // 임시변수
    if(!temp && e.target.tagName != 'I'){
        for(let i = 0; i < sub.length; i++) {
            sub[i].style.display = 'none';
        }
    }
  });
//   area.addEventListener('click', ()=> {
//     for(let i = 0; i < sub.length; i++) {
//         sub[i].style.display = 'none';
//     }
//   });
  

