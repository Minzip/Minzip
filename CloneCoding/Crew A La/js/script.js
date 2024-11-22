//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다


//02.splitting.js
$(function(){
    Splitting();  //대문자로쓴다!!!
  });

  //03.approach .text.on이벤트
$(window).on('scroll resize', function(){
    let scrollPos = 0;
        scrollPos = $(document).scrollTop();
        //alert(scrollPos);
        fixHeader();
        fix();
        fixList();


function fixHeader() {
    if(scrollPos > 80){$('header').addClass('on');}
    else {$('header').removeClass('on');}
}


function fix(){
   if(scrollPos > 1250){$('.fix .text').addClass('on')}
   else{$('.fix .text').removeClass('on')} 
   if(scrollPos > 2700){$('.fix .text').removeClass('on')}
}


function fixList(){
    $('.approach .inner .list li a').removeClass('on');

 if(scrollPos > 1250){
     $('.approach .inner .list li a').removeClass('on');
     $('.approach .inner .list li:eq(0) a').addClass('on')    
}
 if(scrollPos > 1650){
     $('.approach .inner .list li a').removeClass('on');
     $('.approach .inner .list li:eq(1) a').addClass('on');    
}
 if(scrollPos > 2050){ 
    $('.approach .inner .list li a').removeClass('on');
    $('.approach .inner .list li:eq(2) a').addClass('on');   
}
 if(scrollPos > 2550){
     $('.approach .inner .list li a').removeClass('on');
     $('.approach .inner .list li:eq(3) a').addClass('on');    
    }
 if(scrollPos > 2900) {
    $('.approach .inner .list li a').removeClass('on');
   }
 }
});


// gnb메뉴
$(function(){
    $('header .inner .gnbBtn').on('click', function(){
        $('nav.gnb').toggleClass('on');
    });
    $('.contents').on('click', function(){
        $('nav.gnb').removeClass('on');
    });
});


//scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 