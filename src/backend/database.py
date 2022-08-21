from pymongo import MongoClient

connection_string = "mongodb://localhost:27017"
client = MongoClient(connection_string)
db = client.get_database("AnytimeAid")
collection = db.get_collection("User Information")


# User Schema Proposal
'''
{
    "user": {
        "name": "",
        "phone number": "",
        "Contact List": {
            "Contact": {
                "name": "",
                "phone_number": 0,
                "address": ""
            }
        }
    }
}

'''


def update_user_info(user_info):
    for key in user_info.keys():
        try:
            if key in ["name", "phone number"]:
                collection.update_one({"user.name": {"$eq": user_info["name"]}}, {"$set": {"user." + key: user_info[key]}})

            elif user_info["Contact List"]["Contact"] in ["name", "phone number", "address"]:
                collection.update_one({"user.name": {"$eq": user_info["name"]}}, {"$set": {"user.Contact List.Contact." + key: user_info["Contact List"]["Contact"][key]}})
        except:
            pass

    return "success"


def create_new_user(user_info):
    collection.insert_one(user_info)


def get_user_info(user_phone_number):
    user_info = collection.find_one({"user.phone number": { "$eq": user_phone_number}})
    contact_info = user_info["Contact List"]["Contacts"]
    return user_info


def delete_user(user_phone_number):
    collection.deleteOne({"user.phone number": user_phone_number})

