from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login
from restaurants.models import Restaurant
from backend.constants import set_user_id
from customer.models import Customer

@api_view(['POST'])
def retrieve_user(request):

    userd= request.data  
    user_name=userd["username"]
    user_password=userd["password"] 
    user_dict= { "email" : user_name, "password" : user_password }
    #print(user_dict["email"], user_dict["password"])

    user_auth = authenticate(username = user_name,password = user_password)
#     print("retrieve  a"  + str(user_auth))
    if user_auth is not None:
          bool = login(request,user_auth)
          #print("true")


          this_user = User.objects.get(username = user_name)
          print("HELLO ID", this_user.id)
          set_user_id(this_user.id)

          return Response( True)
                
    else:
          print(messages.error(request,"login failed"))
          print("false")
          return Response( False)
          

    return Response(userd)
    
@api_view(['POST'])
def signup(request):
    user_info = request.data
    username = user_info["username"]
    email = user_info["email"]
    password = user_info["password"]
    try:
        myuser = User.objects.create_user(username,email,password)
        myuser.save()
        set_user_id(myuser.id)
        
        #print("sign up ")
        print(username)
        print(email)
        print(password)
    # print("this " + str(myuser))
    except:
        print("Username taken.")
        return Response(False)
    #messages.success(request, "Account created succesfully")
    
    return Response(True)