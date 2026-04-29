from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def Account_creation(request):
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
            
            
            

        except Exception as e:
            return JsonResponse(
                {'error':f'Error in server -- {str(e)}'},
                status = 500
            )

    


@csrf_exempt
def Account_Login(request):
    return JsonResponse({'Message':"Login Api working"})