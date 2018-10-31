$(function(){
	$('.nav-link').on('click', function(e) {
		e.preventDefault()
		if (!($(this).hasClass('disabled'))){
			$('.active').removeClass("active")
			$(this).addClass('active')
		}
	})

	$('.navbar-brand').on('click', function(e) {
		e.preventDefault()
		window.location.reload(1)
	})
})