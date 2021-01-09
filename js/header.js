$(function () {
    $('#hamburgerButton').click(function(){
        $(this).toggleClass('is-active');
        if(this.classList.contains('is-active')){
            $('#adaptive-menu').removeClass('disactive');
            $('#adaptive-menu').addClass('active');
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            $('#adaptive-menu').removeClass('active');
            $('#adaptive-menu').addClass('disactive');
            document.querySelector('body').style.overflow = 'auto';
        }
	});
});