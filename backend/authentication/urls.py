from django.contrib import admin
from django.urls import path, include
from authentication import views  

urlpatterns = [
    path('login/', views.retrieve_user, name='login'),
    path('register/', views.signup, name = "register")
]
