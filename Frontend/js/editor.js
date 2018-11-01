hljs.initHighlightingOnLoad()
$(function(){
	// Syntax highlighting
	$('button:contains("Highlight!")').on('click', function (e) {
		$('pre code').each(function (i, block) {
		 	setTimeout(hljs.highlightBlock(block), 2000)
		})
	})

	$('button:contains("Run!")').on('click', function(){		
		var question = $('.active').text()
		var questionNumber = question.substr(question.length - 1)
		var code = $('#code').text()
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

		if (ans == answers[questionNumber]){
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
})