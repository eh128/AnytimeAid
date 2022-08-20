from flask import Flask, render_template, request
# from webscraper import get_instructions
from database import create_new_user, get_user_info, update_user_info, delete_user

app = Flask(__name__)


@app.route('/instructions', methods=["GET", "POST"])
def instructions():
    # I expect the input data to be in a JSON format
    if request.method == 'POST':
        req = request.json
        img_uri = req['image']

        instructions = get_instructions(img_uri)

        result = {
            "instructions": instructions
        }
        return result


@app.route('/emergency-contacts-create', methods=["POST"])
def emergency_contacts():
    # I expect the input data to be in a JSON format
    req = request.json
    create_new_user(req)
    return "successfully stored"


@app.route('/emergency-contacts-update', methods=["POST"])
def emergency_contacts():
    # I expect the input data to be in a JSON format
    req = request.json
    update_user_info(req)
    return "successfully stored"


@app.route('/emergency-contacts-fetch-info', methods=["GET"])
def emergency_contacts():
    # I expect the input data to be in a JSON format
    req = request.json
    req_phone_number = req["telephone number"]
    user_info = get_user_info(req_phone_number)

    return user_info


@app.route('/emergency-contacts-delete-user', methods=["GET"])
def emergency_contacts():
    # I expect the input data to be in a JSON format
    req = request.json
    req_phone_number = req["telephone number"]
    delete_user(req_phone_number)

    return "Successfully deleted user info"


if __name__ == '__main__':
    app.run(debug=True)






