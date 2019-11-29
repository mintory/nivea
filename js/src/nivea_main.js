(function(){

const wrap = $('#wrap');

// 네비게이션 바 누르면 나오게 만들기 ---------------------------------------------
// ------------------------------------------------------------------------
// 
const headBox = wrap.children('#headBox');
const nav = headBox.find('.navgation'); // 네비게이션 바
const slide_li = nav.find('li'); // 어바웃 버튼

const slide_div = slide_li.children('.slide'); // slide_002 나타나는 애들

// ------------------------------------------------------------------------
slide_li.on('mouseenter',function(){
	$(this).find(slide_div).stop().slideDown();
});

slide_li.on('mouseleave',function(){
	slide_div.stop().slideUp();
});
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------





// 버튼 누르면 이미지 넘어가게 만들기 ---------------------------------------------
// ------------------------------------------------------------------------
const conBox = wrap.children('#contentBox');
const mainSlide = conBox.find('.main_slide');
const btnArea = mainSlide.children('.btn');

const nextBtn = btnArea.find('.nextBtn');
const prevBtn = btnArea.find('.prevBtn');

const slideUl = mainSlide.children('ul');
let slideLi = slideUl.children('li');
const btn = btnArea.find('button')


slideLi.eq(-1).clone().prependTo(slideUl);
slideLi = slideUl.children('li');
// ------------------------------------------------------------------------

let i = 0;
let imgLen = slideLi.length;

const indiUl = btnArea.find('.indicator');
const indiLi = indiUl.children('li');

console.log(indiLi);

// ---------------------------------

let timed = 1000;

const indiAcc = function(i){
		indiLi.eq(i).siblings().css({backgroundColor:'#fff'});
		indiLi.eq(i).css({backgroundColor:'#00136F'});
}
indiAcc(i);
nextBtn.on('click',function(e){
	e.preventDefault();
	i++;
	if(i>=imgLen-1){
	slideUl.stop().css({left:100 + '%'});
	i=0;
	}
	slideUl.stop().animate({left:-100 * i + '%'});
	indiAcc(i);
});

prevBtn.on('click',function(e){
	e.preventDefault();
	i--;
	slideUl.stop().animate({'left':-100 * i +'%'}, function(){
		if(i < 0){
			slideUl.stop().css({'left':-100*(imgLen-2)+'%'});
			i = imgLen-2;
		};//if
		indiAcc(i);
	});//animate
})//prevBtn


const AutoSlide = function(){
	go = setInterval(function(){
		nextBtn.trigger('click');

	}, timed * 3);
};
const stopSlide = function(){
	clearInterval(go);
};

AutoSlide();

slideUl.on('mouseenter',function(){
	stopSlide();
});

slideUl.on('mouseleave', function(){
	AutoSlide();
})

//------------------------------------------------------------------------
//------------------------------------------------------------------------
	
	indiLi.children('a').on('focus', function(e){
		e.preventDefault();
		i = $(this).parent().index();
		indiAcc(i); 
		slideUl.stop().animate({left:-100 * i + '%'});

	});


})(jQuery);