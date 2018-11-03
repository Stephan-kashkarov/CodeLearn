hljs.initHighlightingOnLoad()
$(function(){
	// Syntax highlighting
	$('button').on('click', function (e) {
		$('pre code').each(function (i, block) {
		 	setTimeout(hljs.highlightBlock(block), 2000)
		})
	})

	$('button:contains("Run!"), button:contains("Mark!")').on('click', function () {
		// grab question ID
		var question = $('.active').text()
		var questionNumber = question.substr(question.length - 1)
		// get and parse code
		var code = $('#code').text()

		//send code
		var ans = $.ajax({
				url: "http://127.0.0.1:5000/mark",
				method: "POST",
				dataType: 'jsonp',
				async: false,
				data: JSON.stringify({
					'code': code
				}),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function (data) {
					console.log("Ajax succsess: " + data)
				},
				failure: function (errMsg) {
					console.log("Ajax error: " + errMsg)
				}
			}).responseText
		// process response
		if (ans == answers[questionNumber]){
			if ($(this).text() == 'Mark!') {
				console.log("Opening next question");
				
				var newNumber = eval(questionNumber) + 1 
				console.log(newNumber)
				var selector = question.substr(0, question.length - 1) + newNumber
				console.log(selector);
				$('.nav-item:contains(' + selector + ')').removeClass('disabled')
				var questions = JSON.parse(window.localStorage.getItem('questions'))
				questions[parseInt(questionNumber)]['locked'] = false
				console.log(questions);
				window.localStorage.setItem("questions", JSON.stringify(questions))
				$('button:contains("Next!")').removeClass('disabled')
			}
			$('.result').text('Correct')
		} else {
			$('.result').text('Incorrect')
		}
		console.log(ans);
		
		if (ans[0] == "<"){
			$('#output').parent().removeClass('python').addClass('html')
		} else if ($('#output').parent().hasClass('html')) {
			$('#output').parent().removeClass('html').addClass('python')
		}

		$('#output').text(ans)
		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block)
		})
	})

	$('button:contains("Save!")').on('click', function(){
		var code = $('#code').text()
		var question = $('.active').text()
		var questionNumber = question.substr(question.length - 1)
		console.log(window.localStorage.getItem('questions'))
		var questions = JSON.parse(window.localStorage.getItem('questions'))
		questions[parseInt(questionNumber) - 1]['code'] = code
		console.log(questions);
		window.localStorage.setItem("questions", JSON.stringify(questions))
	})

	$('button:contains("Next!")').on('click', function () {
		if (!($(this).hasClass('disabled'))){
			var question = $('.active').text()
			var questionNumber = question.substr(question.length - 1)
			var newQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) + 1)
			var nextQuestion = question.substr(0, question.length - 1) + (eval(questionNumber) + 2)
			if (newQuestion !== "Question7") {
				$('button:contains("Prev!")').removeClass('disabled')
				$('.nav-item:contains("' + question + '")').removeClass('active')
				$('.nav-item:contains("' + newQuestion + '")').addClass('active')
				if ($('.nav-item:contains("'+ nextQuestion + '")').hasClass('disabled')) {
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
			if (newQuestion !== "Question0"){
				$('button:contains("Next!")').removeClass('disabled')
				$('.nav-item:contains("' + question + '")').removeClass('active')
				$('.nav-item:contains("' + newQuestion + '")').addClass('active')
				if ($('.nav-item:contains("' + nextQuestion + '")').hasClass('disabled')) {
					$(this).addClass('disabled')
				}
			} else {
				$(this).addClass('disabled')
			}
		}
	})
})