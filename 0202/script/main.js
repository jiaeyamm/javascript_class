
// 모달 띄우기


let modal = `
<div class="modal">
    <div class="m_inner">
    <img src="./images/modalimage.jpg" alt="모달 배너">
    <p>
    <input type="checkbox" id="ch">
    <label for="ch">일주일간 열지 않음</label>
    <a href="#" title="닫기">닫기</a>
    </p>
    </div>
</div>`;


$('body').append(modal);

let ch = $('.modal #ch'); // 체크박스 변수 선언.

// 쿠키 파일이 현재 브라우저에 존재하면 모달창이 안나오도록 한다.

if($.cookie('popup') == 'none') {
    $('.modal').hide();
} 

function closeModal() {
    if(ch.is(':checked')) {
        $.cookie('popup', 'none', {expires:7, path:'/'});
    }

    $('.modal').hide();
}


// 닫기 버튼을 클릭하면 closeModal 함수 실행

$('.modal a').click(function() {
    closeModal();
})