"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views  

urlpatterns = [
    path('cuisine', views.insert_cuisine_preferences, name='insert_cuisine_preferences'),
    path('ambiance', views.insert_ambiance_preferences, name='insert_ambiance_preferences'),
    path('flavor', views.insert_flavor_preferences, name='insert_flavor_preferences'),
    path('interest', views.insert_interest_preferences, name='insert_interest_preferences'),

    #path('register/', include('authentication.urls'))
]
  