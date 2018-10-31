var emptyLocalTemplate = [
	{
		'name': 'Question1',
		'locked': false
	},
	{
		'name': 'Question2',
		'locked': true
	},
	{
		'name': 'Question3',
		'locked': true
	},
	{
		'name': 'Question4',
		'locked': true
	},
	{
		'name': 'Question5',
		'locked': true
	},
	{
		'name': 'Question6',
		'locked': true
	}
]

$(function(){
	var questions = window.localStorage.getItem('questions')
	if (questions){
		var questions = JSON.parse(window.localStorage.getItem('questions'))
		for (var i in questions){
			console.log(questions[i])
			if (questions[i]['locked']){
				var obj = questions[i]['name']
				$('a:contains(' + obj + ')').addClass('disabled')
			}
		}
	} else {
		window.localStorage.setItem('questions', JSON.stringify(emptyLocalTemplate))
		var questions = emptyLocalTemplate
		for (var i in questions) {
			console.log(questions[i])
			if (questions[i]['locked']) {
				var obj = questions[i]['name']
				$('a:contains(' + obj + ')').addClass('disabled')
			}
		}
	}
})