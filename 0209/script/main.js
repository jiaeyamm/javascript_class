
//1.  변수선언
//메인메뉴 클릭시 서브가 나오게
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area01 = document.querySelector('main');
let m_area02 = document.querySelector('footer');


for(let i=0;i<gnb.length;i++){
  gnb[i].addEventListener('click',()=>{
      // alert('클릭 맞아요..');
      //console.log(gnb[i]);
      const child = gnb[i].children;
      //console.log(child[1]);
      
      //li태그 안에 있는 .sub모두 숨기기
      for(let j=0;j<sub.length;j++){
        sub[j].style.display='none';
      }

      //내가 선택한 li의 sub만 나오게
      child[1].style.display='block';
      // $(this).find('.sub').show();

      //$(this).parent().siblings().find('.sub').hide();
  });
}

//메인메뉴외 영역을 클릭시 서브가 숨겨진다.
m_area01.addEventListener('click',()=>{
  for(let i=0;i<gnb.length;i++){
    sub[i].style.display='none';
  }
});
m_area02.addEventListener('click',()=>{
  for(let i=0;i<gnb.length;i++){
    sub[i].style.display='none';
  }
});
