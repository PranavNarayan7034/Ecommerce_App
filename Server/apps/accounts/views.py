from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from dbConfig.db import ConnectMongo 
from .models import UserModel
from django.contrib.auth.hashers import make_password

@csrf_exempt
def Account_creation(request):
    table = ConnectMongo()
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')

            # validations 
            if not name or not email or not password:
                return JsonResponse(
                    {'error':"All fields are required"},
                    status = 400
                )
            # Check user Exist or not 
            if table.find_one({"email":email}):
                return JsonResponse(
                    {"error":"User already Exists"},
                    status = 400
                )
            # Convert password in to hash password 
            hashed_password = make_password(password)
            # Create a model 
            newUser = UserModel(name,email,hashed_password)
            # save user in to mongodb 
            table.insert_one(newUser.to_dict())

            return JsonResponse(
                {'message':'User registed in mongodb',
                "registed user": newUser.name},
                status = 200
            )
            
        except Exception as e:
            return JsonResponse(
                {'error':f'Error in server -- {str(e)}'},
                status = 500
            )

    


@csrf_exempt
def Account_Login(request):
    return JsonResponse({'Message':"Login Api working"})