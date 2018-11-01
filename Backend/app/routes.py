from app import app
from flask import request
import json
import traceback

_print = print

def print(s):
	return s

@app.route('/mark', methods=['POST'])
def mark():
	if request:
		data = request.json
		code = data['code']
		_print(code)
		try:
			code = eval(code)
			_print('> {}'.format(code))
		except:
			code = traceback.format_exc()

		return code
	return 'false'
