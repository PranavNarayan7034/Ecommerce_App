from django.shortcuts import render
from django.http import JsonResponse

def Account_creation(request):
    return JsonResponse({'Message':"Signup Api working"})

def Account_Login(request):
    return JsonResponse({'Message':"Login Api working"})