from app import app
from flask import request
import json
import traceback

answers = {
	1: "Hello, World!"
}

def _print(s):
	return s

@app.route('/mark', methods=['POST'])
def mark():
	if request:
		data = request.json
		answer = answers[data['question']]
		error = False
		code = data['code']
		print(code)
		try:
			code = eval(code)
			print(">", code)
		except:
			error = True
			code = traceback.format_exc()

		if code == answer:
			return 'true'
		elif error:
			return code
		else:
			return str("{} is not the same as {}".format(code, answer))

	return 'false'
