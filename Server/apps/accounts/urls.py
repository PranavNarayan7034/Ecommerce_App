from django.urls import path 
from .views import Account_creation, Account_Login

urlpatterns = [
    path('signup',Account_creation),
    path('login',Account_Login)
]