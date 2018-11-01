var emptyLocalTemplate = [
	{
		'name': 'Question1',
		'active': true,
		'locked': false,
		'code': "# Write your code here!"
	},
	{
		'name': 'Question2',
		'active': false,
		'locked': true,
		'code': "# Write your code here!"
	},
	{
		'name': 'Question3',
		'active': false,
		'locked': true,
		'code': "# Write your code here!"
	},
	{
		'name': 'Question4',
		'active': false,
		'locked': true,
		'code': "# Write your code here!"
	},
	{
		'name': 'Question5',
		'active': false,
		'locked': true,
		'code': "# Write your code here!"
	},
	{
		'name': 'Question6',
		'active': false,
		'locked': true,
		'code': "# Write your code here!"
	}
]

$(function(){
	// Initialize items from Local Storage
	var questions = window.localStorage.getItem('questions')
	if (questions){
		var questions = JSON.parse(window.localStorage.getItem('questions'))
	} else {
		window.localStorage.setItem('questions', JSON.stringify(emptyLocalTemplate))
		var questions = emptyLocalTemplate
	}

	for (var i in questions){
		console.log(questions[i])
		if (questions[i]['locked']){
			var obj = questions[i]['name']
			$('a:contains(' + obj + ')').addClass('disabled')
		} else if (questions[i][active]) {
			$('#code').text(questions[i]['code'])
		}
	}


	// Load Correct Question
	var question = $('.active').text()
	var activeQuestion = "q" + question.substr(question.length - 1)

	if (activeQuestion == 'q1'){
		$('.about').append($.parseHTML(intro))
	}
	$('.question-text').append($.parseHTML(eval(activeQuestion)))
})