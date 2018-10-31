hljs.initHighlightingOnLoad()
$(function(){
	// Syntax highlighting
	$('button:contains("Highlight!")').on('click', function (e) {
		$('pre code').each(function (i, block) {
		 	setTimeout(hljs.highlightBlock(block), 2000)
		})
	})
})