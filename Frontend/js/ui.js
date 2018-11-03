$(function(){
	$('.nav-link').on('click', function(e) {
		e.preventDefault()
		if (!($(this).hasClass('disabled'))){
			$('.active').removeClass("active")
			$(this).addClass('active')
			loadPage()
		}
	})

	$('.navbar-brand').on('click', function(e) {
		e.preventDefault()
		window.location.reload(1)
	})

	$('button:contains("Next!")').on('click', function () {
		if (!($(this).hasClass('disabled'))) {
			var question = $('.active').text()
			var questionNumber = question.substr(question.length - 1)
			var newQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) + 1)
			var nextQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) + 2)
			if (newQuestion !== "Question7") {
				$('button:contains("Prev!")').removeClass('disabled')
				$('.nav-item:contains("' + question + '")').removeClass('active')
				$('.nav-item:contains("' + newQuestion + '")').addClass('active')
				loadPage()
				if ($('.nav-item:contains("' + nextQuestion + '")').hasClass('disabled')) {
					$(this).addClass('disabled')
				}
			} else {
				$(this).addClass('disabled')
			}
		}
	})

	$('button:contains("Prev!")').on('click', function () {
		if (!($(this).hasClass('disabled'))) {
			var question = $('.active').text()
			var questionNumber = question.substr(question.length - 1)
			var newQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) - 1)
			var nextQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) - 2)
			if (newQuestion !== "Question0") {
				$('button:contains("Next!")').removeClass('disabled')
				$('.nav-item:contains("' + question + '")').removeClass('active')
				$('.nav-item:contains("' + newQuestion + '")').addClass('active')
				loadPage()
				if ($('.nav-item:contains("' + nextQuestion + '")').hasClass('disabled')) {
					$(this).addClass('disabled')
				}
			} else {
				$(this).addClass('disabled')
			}
		}
	})
})