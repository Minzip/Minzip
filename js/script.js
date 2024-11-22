//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다



$(function() {
    $('header .gnb li .contact').on('click', function() {
        var top = $('#footer').offset().top;
        $('html, body').animate({ scrollTop: top }, 400 );
        $('header .gnb li span').addClass('active');
        $('header .gnb li .contact').siblings().find('span').removeClass('active');
        $('header .gnb li .contact').addClass('active');
        $('header .gnb li .contact').siblings().removeClass('active');
    });     
});



//04.scrolla.js
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
}); 
$(document).ready(function(){
    // justabout
    const text = $('#text')[0]; // jQuery로 요소 선택 후 네이티브 DOM 요소로 변환
    const path = $('#ellipse-path')[0]; // jQuery로 요소 선택 후 네이티브 DOM 요소로 변환
    let pathLength;
    
    function moveTextAlongPath(timestamp) {
        if (!pathLength) {
            pathLength = path.getTotalLength();
        }
        const elapsed = timestamp % 10000;
        const distance = (elapsed / 10000) * pathLength;
        const point = path.getPointAtLength(distance);
        const alpha = point.alpha || 0; // alpha 값이 없을 경우 0으로 설정
        text.setAttribute('x', point.x);
        text.setAttribute('y', point.y);
        text.setAttribute('transform', `rotate(${alpha}, ${point.x}, ${point.y})`);
        requestAnimationFrame(moveTextAlongPath);
    }
    requestAnimationFrame(moveTextAlongPath);        
});
// pleasure
window.addEventListener('scroll', function() {
    // 현재 스크롤 위치를 가져옵니다.
    var scrollPosition = window.scrollY;
    
    // 이미지의 각도를 스크롤 위치에 따라 조절합니다.
    var angle = scrollPosition / -9; // 스크롤 속도에 따라 회전 속도를 조절할 수 있습니다.
    
    // 이미지 요소에 스타일을 적용하여 각도를 변경합니다.
    document.getElementById('handImg').style.transform = 'rotate(' + angle + 'deg)';
});


// section.hobby
$(function(){
    gsap.registerPlugin(ScrollTrigger);
    //01.배경컬러번경
    gsap.timeline({
        scrollTrigger:{
            trigger:'.hobby',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1
        }
    })
    .to('.wrap', {backgroundColor:"#fff", color:"#000", ease:"none", duration: 5}, 0)
    .to('.logo path',{stroke:"#b9dc5f", ease:"none", duration:5}, 0)
    .to('.logo p',{color:"#333", ease:"none", duration:5}, 0)
    .to('.gnb', {color:"#333", ease:"none", duration:5}, 0);
    //.to('.line', {backgroundColor:"#030303", color:"#fff", ease:"none", duration: 5}, 0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.skills',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1
        }
    })
    .to('.wrap', {backgroundColor: '#030303', color: '#fff', ease:"none", duration: 5}, 0)
    .to('.gnb', {color:"#fff", ease:"none", duration:5}, 0)
    .to('.logo path',{stroke:"#555", ease:"none", duration:5}, 0)
    .to('.logo p',{color:"#fff", ease:"none", duration:5}, 0);

    // 이미지 upBox
    let upBox = document.querySelectorAll('.upBox');
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: '.hobby',
            pin: true,
            scrub:3,
            start: 'top top',
            end: '+=150%',
            // markers:true
        }
    })
    tl.from(upBox, {'y':'150%','duration':'8', 'ease':'none','stagger':'6'})  //stagger:각각애니메이션의 시간차를 둠
    tl.to(upBox, {'y':'0'})


    
});


// section.strengths

//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다
//02.splitting.js
$(function(){
    Splitting();  //대문자로쓴다!!!
  });


    //03.strengths .text.on이벤트
$(window).on('scroll resize', function(){
    let scrollPos = 0;
        scrollPos = $(document).scrollTop();
        //alert(scrollPos);
        fix();
        listBox();

        
        


function fix(){
   if(scrollPos > 7602){$('.fix .fixBox').addClass('on')}
   else{$('.fix .fixBox').removeClass('on')} 
   if(scrollPos > 10360){$('.fix .fixBox').removeClass('on')}
   if(scrollPos > 7602){$('.inner .spin').addClass('on')}
   else{$('.fix .fixBox').removeClass('on')} 
   if(scrollPos > 10360){$('.inner .spin').removeClass('on')}
}

   
function listBox(){
    $('.strengths .inner .listBox li').removeClass('on');

 if(scrollPos > 7620){
     $('.strengths .inner .listBox li').removeClass('on');
     $('.strengths .inner .listBox li:eq(0)').addClass('on')    
}
 if(scrollPos > 8350){
     $('.strengths .inner .listBox li').removeClass('on');
     $('.strengths .inner .listBox li:eq(1)').addClass('on');    
}
 if(scrollPos > 8500){ 
    $('.strengths .inner .listBox li').removeClass('on');
    $('.strengths .inner .listBox li:eq(2)').addClass('on');   
}
 if(scrollPos > 9000){
     $('.strengths .inner .listBox li').removeClass('on');
     $('.strengths .inner .listBox li:eq(3)').addClass('on');    
}
 }



});






    
    
$(function(){
    $("#line2").simplyScroll({
       speed:4,
       pauseOnHover:false,
       pauseOnTouch: false
    });
 });

 $(document).ready(function() {
    // 이전 스크롤 위치를 저장할 변수
    var prevScrollPos = 0;

    // SimplyScroll 슬라이드 컨테이너 초기화
    var $scrollContainer = $("#line2").simplyScroll({
        speed: 5,
        pauseOnHover: false,
        pauseOnTouch: false
    });

    // 슬라이드가 다시 시작할 때 이벤트 핸들러 추가
    $scrollContainer.bind('update', function() {
        // 스크롤 위치가 0이 아닌 경우에만 이전 위치에서 이어서 시작
        if (prevScrollPos !== 0) {
            $(this).scrollLeft(prevScrollPos);
        }
    });

    // 슬라이드가 끝에 도달했을 때 이벤트 핸들러 추가
    $scrollContainer.bind('scroll', function() {
        var $this = $(this);
        var itemWidth = $this.find('.simply-scroll-list li:first').outerWidth(true);
        var totalWidth = $this.find('.simply-scroll-list').outerWidth();

        // 슬라이드가 오른쪽 끝에 도달했을 때
        if ($this.scrollLeft() + $this.width() >= totalWidth) {
            // 현재 스크롤 위치를 저장
            prevScrollPos = $this.scrollLeft();
        }
    });
});
//9795


$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger: '.skills',
            start:'0% 100%',
            end: '0% 20%',
            scrub:1,
            //markers: true
        }
    })
    
    .fromTo('.skills .card .figma', {x:'0%'},{x:'-200%',y:'-120%', ease:'none', duration:5},0)
    .fromTo('.skills  .card .ps', {x:'0%'},{x:'-95%',y:'-100%',  ease:'none', duration:5},0)
    .fromTo('.skills .card .ai', {x:'0%'},{x:'70%',y:'-160%',  ease:'none', duration:5},0)
    .fromTo('.skills  .card .js', {x:'0%'},{x:'180%',y:'-50%',  ease:'none', duration:5},0)
    .fromTo('.skills .card .css', {x:'0%'},{x:'-170%',y:'80%',  ease:'none', duration:5},0)
    .fromTo('.skills .card .jq', {x:'0%'},{x:'30%',y:'110%', ease:'none', duration:5},0)
    .fromTo('.skills .card .html', {x:'0%'},{x:'150%',y:'60%', ease:'none', duration:5},0)
    
    
});





$(window).on('scroll resize', function(){
  let scrollPos = 0;
        scrollPos = $(document).scrollTop();
        //alert(scrollPos);
        leftBox();

        
        


function leftBox(){
   if(scrollPos > 11700){$('.leftBox .textBox').addClass('on')}
   else{$('.leftBox .textBox').removeClass('on')} 
   if(scrollPos > 14000){$('.leftBox .textBox').removeClass('on')}
}
});

// work
$(function(){ 
    gsap.timeline({
    scrollTrigger:{
        trigger:'.work',
        start:'0% 50%',
        end: '30% 60%',
        scrub: 1,
       // markers:true
    }
})
.fromTo('.work .right .a', { y: '-200%' }, { y: -20, ease: 'none', duration: 7,}, 0) // paused 속성 추가하여 애니메이션 일시정지
.fromTo('.work .right .b', { y: '100%' }, { y: 0, ease: 'none', duration: 5,}, 0);  // paused 속성 추가하여 애니메이션 일시정지
})
