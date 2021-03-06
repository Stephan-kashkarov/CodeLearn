const answers = {
	1: "Hello, World!",
	2: "",
	3: "",
	4: "",
	5: "",
	6: ""
}

const intro = `
<div class="desc rounded">
					<h1 class='title'><b>Welcome To Code Learn!</b><br></h1>
					<p>
						This website was created for the final assignment of Webdesign 2018 by <i>Stephan Kashkarov</i>.
						The intent of this website is to teach you some basic programming skills in a language 
						called Python.This website is based of a real website called Grok learning.

						The goal of this website is to finish the corse. To do so you must complete all questions in order
						after completing each question the next question will automatically be unlocked after the question
						is marked correct.
						The questions that you have completed will be saved in local storage so dont worry about refreshing

					</p>
					<div class="accordion" id="accordionExample">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
									aria-controls="collapseOne">
										What is a programming language?
									</button>
								</h5>
							</div>

							<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div class="card-body">
									According to Wikipedia a programming language is:
									formal language,
									which comprises a set of instructions
									used to produce various kinds of output.
									Programming languages are used to create programs
									that implement specific algorithms
									<br>
									<br>
									Most programming languages consist of instructions for computers, although there are programmable machines that use a
									limited set of specific instructions, rather than the general programming languages of modern computers. Early ones
									preceded the invention of the digital computer, the first probably being the automatic flute player described in the
									9th century by the brothers Musa in Baghdad, during the Islamic Golden Age.[1] From the early 1800s, programs were used
									to direct the behavior of machines such as Jacquard looms, music boxes and player pianos.[2] However, their programs
									(such as a player piano's scrolls) could not produce different behavior in response to some input or condition.
									<br>
									<br>
									Thousands of different programming languages have been created, mainly in the computer field, and many more still are
									being created every year. Many programming languages require computation to be specified in an imperative form (i.e.,
									as a sequence of operations to perform) while other languages use other forms of program specification such as the
									declarative form (i.e. the desired result is specified, not how to achieve it).
									<br>
									<br>
									The description of a programming language is usually split into the two components of syntax (form) and semantics
									(meaning). Some languages are defined by a specification document (for example, the C programming language is specified
									by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference.
									Some languages have both, with the basic language defined by a standard and extensions taken from the dominant
									implementation being common.
									<br>
									<br>
									<br>
									Source:
									<a href="https://en.wikipedia.org/wiki/Programming_language">https://en.wikipedia.org/wiki/Programming_language</a>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header" id="headingTwo">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
									aria-expanded="false" aria-controls="collapseTwo">
										What is Python?
									</button>
								</h5>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
								<div class="card-body">
									Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built
									in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application
									Development, as well as for use as a scripting or glue language to connect existing components together.
									<br>
									<br>
									Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python
									supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the
									extensive standard library are available in source or binary form without charge for all major platforms, and can be
									freely distributed.
									<br>
									<br>
									Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no
									compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input
									will never cause a segmentation fault.
									<br>
									<br>
									Instead, when the interpreter discovers an error, it raises an exception. When
									the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows
									inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through
									the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective
									power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the
									fast edit-test-debug cycle makes this simple approach very effective.
									<br>
									<br>
									<br>
									Source:
									<a href="https://www.python.org/doc/essays/blurb/">https://www.python.org/doc/essays/blurb/</a>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header" id="headingThree">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"
									aria-expanded="false" aria-controls="collapseThree">
										About the Dev
									</button>
								</h5>
							</div>
							<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
								<div class="card-body">
									Stephan Kashkarov, The developer of this site (me) is a college student from the city of Canberra
									He is currently participating in the IT program at Gungahlin college and the Discovering Engeneering
									Extention Program at the Australian National University. He intends to go onto University for CompSci or
									Software Engeneering upon the completion of Yr 12 at Gungahlin College
									<br>
									<br>
									An exert from my description on Atschool.live
									<br>
									<br>
									Stephan is a student currently enrolled in year 11 at Gungahlin college. He is doing two lines of IT and Engeneering
									extention at ANU. He has been pasionate about coding ever since he started learning in early year 10. He is proficient
									in developing backend systems using the python framework flask and designing SQL databases. In the project he does both
									of these tasks
									<br>
									<br>
									An exert from my resume:
									<br>
									<br>
									I have a few years experience with Python and have written many projects since picking up Programming in early 2017. I
									have written countless websites using technologies such as Flask, Node, Bootstrap, JQuery, WebAssembly, React and Vue.
									I also have done quite a few embedded electronics projects using Arduinos and Attiny chips.
									<br>
									<br>
									Links:
									<br>
									<a target="_blank" href="https://github.com/Stephan-kashkarov">Github</a>
									<br>
									<a target="_blank" href="https://www.instagram.com/stephan_kashkarov/">Instagram</a>
									<br>
									<br>
									Sorry for self promoting, I needed content for this slide However if you do see this and want me to make any enquiries
									feel free to email me @ kashkarovWork@gmail.com. I would love to make some websites for you or anything similar.
									<br>
									<br>
									This website was built with minimal Flask (for marking), JQuery and Bootstrap
								</div>
							</div>
						</div>
					</div>
					<br><br>	
					
					<br>
				</div>`

const q1 = `
<div><h5><b><u>Hello World!</u></b></h5> <span class = "q-desc">One thing all newcommers to programming do to get themselvesstarted on thier journey is to make the computer say "<samp class="string">Hello World!</samp>"so lets
try do that.In Python there are things called functions.Functions are
like boxes that take an input and give an output.There are thousands ofdefault
functions in python and you can even make your own, but lets start with the most
simplefunction of all... <samp class="function"> print()</samp>!. the print funtion
takes whatever you give it and prints that out as an output.This is the easiest way
to see what your code is doing or to give outputs to your code quickly and simply. <br>
	<br>
	Lets
try printing Hello, World!. <br>
	<br>
	so we need to print hello world.Lets thing of how we can do this.Using all of our
	knowlege of programming we know that we need a to get a string and put it though
a
function to give us an output. <br>
	<br>
	We have as string < samp class = "string" > "Hello World!" < /samp> and we have a function
"<samp class="
function ">print()</samp>", so lets put them together...below type in this and hit mark. <br>
	<br>
	<samp class="function"> print( <samp class="string"> "Hello World!" </samp>)</samp>
	</span></div>`

const q2 = ``