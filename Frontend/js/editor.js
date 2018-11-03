hljs.initHighlightingOnLoad()
$(function(){
	// Syntax highlighting
	$('button').on('click', function (e) {
		
	})

	$('button:contains("Run!"), button:contains("Mark!")').on('click', function () {
		// grab question ID
		var question = $('.active').text()
		var questionNumber = question.substr(question.length - 1)
		// get and parse code
		var code = $('#code').text()
		console.log(code)
		

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
				dataType: "json"
			}).responseText
		// process response
		if (ans == answers[questionNumber]){
			if ($(this).text() == 'Mark!') {
				var newNumber = eval(questionNumber) + 1 
				var selector = question.substr(0, question.length - 1) + newNumber
				$('.nav-item:contains(' + selector + ')').removeClass('disabled')
				var questions = JSON.parse(window.localStorage.getItem('questions'))
				questions[parseInt(questionNumber)]['locked'] = false
				window.localStorage.setItem("questions", JSON.stringify(questions))
				$('button:contains("Next!")').removeClass('disabled')
			}
			$('.result').text('Correct')
		} else {
			$('.result').text('Incorrect')
		}
		
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
		var questions = JSON.parse(window.localStorage.getItem('questions'))
		questions[parseInt(questionNumber) - 1]['code'] = code
		window.localStorage.setItem("questions", JSON.stringify(questions))
	})

	$("#code").on('keypress',function(e){
		console.log(e.which)
		// syntax highlighting
		// $('pre code').each(function (i, block) {
		// 	hljs.highlightBlock(block)
		// })
		switch (e.which) {
			case 13:
				console.log('enter pressed');
				$(this).append('\n')
				break
		
			default:
				break
		}
		$(this).focus()
		$(this).prop('selectionEnd', $(this).prop('selectionEnd'))
	})
})