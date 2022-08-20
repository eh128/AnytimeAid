from flask import Flask, render_template, request
from webscraper import get_instructions

app = Flask(__name__)


@app.route('/instructions', methods=["GET", "POST"])
def index():
    # I expect the input data to be in a JSON format
    if request.method == 'POST':
        req = request.json
        img_uri = req['image']

        instructions = get_instructions(img_uri)

        result = {
            "instructions": instructions
        }
        return result


@app.route('/emergency-contacts-list', methods=["GET", "POST"])
def index():
    # I expect the input data to be in a JSON format
    if request.method == 'POST':
        req = request.json

        return "successfully stored" + req

    if request.method == 'GET':
        # fetch all user data from database
        pass



if __name__ == '__main__':
    app.run()






