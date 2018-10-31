$(function(){
	$('.nav-link').on('click', function(e) {
		e.preventDefault()
		$('.active').removeClass("active")
		$(this).addClass('active')
		loadContent($(this).text())
	})

	$('.navbar-brand').on('click', function(e) {
		e.preventDefault()
		$('.active').removeClass("active")
		$('.nav-home').addClass('active')
	})
})