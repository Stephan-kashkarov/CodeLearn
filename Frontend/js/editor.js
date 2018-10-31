hljs.initHighlightingOnLoad()
$(function(){
	// Syntax highlighting
	$('button:contains("Highlight!")').on('click', function (e) {
		$('pre code').each(function (i, block) {
		 	setTimeout(hljs.highlightBlock(block), 2000)
		})
	})

	$('button:contains("Mark!")').on('click', function(){
		console.log('click');
		
		var question = $('.active').text()
		var questionNumber = question.substr(question.length - 1)
		var code = $('#code').text()
		var ans = $.ajax({
			url: "127.0.0.1:5000/mark",
			method: "POST",
			async: false,
			data: JSON.stringify({
				'question': questionNumber,
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
		})
		if (ans == 'true'){
			console.log('correct answer');
		} else {
			console.log(ans);
		}
	})
})