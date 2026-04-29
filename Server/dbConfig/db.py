from pymongo import MongoClient
from django.conf import settings

def ConnectMongo():
    try:
        client = MongoClient(settings.MongoUri)
        print("Connected to Mongodb")

        db = client[settings.DbName]
        print("Database created....")

        table = db['users']
        print("Users collection created..")

    except Exception as e:
        print('Error in mongodb Connection')

ConnectMongo()