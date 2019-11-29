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

})(jQuery);