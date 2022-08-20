from pymongo import MongoClient

connection_string = "mongodb://localhost:27017"
client = MongoClient(connection_string)
db = client.get_database("emojiMeet")
collection = db.get_collection("emojiMeet")


# User Schema Proposal
'''
{
"user": {
            "name": "",
            "phone number": "",
            "Contact List" : {
                "Contact": {
                    "name": "",
                    "phone_number": None,
                    "address": ""
                }
            }
        }
    } 

'''

def update_user_info(user_info):
    for field in user_info:
       collection.update_one({field}, {"$set": {field: user_info[field]}})


def create_new_user(user_info):
    collection.insert_one(user_info)


def get_user_info(user_name):
    user_info = collection.find({"name": { "$eq": user_name}})

def delete_user_info(user_name):
    for field in user_name:
        user_info = collection.update({"name": {"$eq"}}, {$unset: {words:1}}




