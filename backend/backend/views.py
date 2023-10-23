from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view

from . import constants  


def index(request):
   
    return render(request, 'index.html')

@api_view(['POST'])
def retrieve_location(request):
    
    location_data = request.data
    while(len(location_data.keys()) ==0):
        continue
    
    town = location_data["town"]
    print("Town: ",town)

    constants.set_user_town(constants.turkish_to_ascii(town))
    print("const user town: ", constants.user_town)
    location_dict = {"town" : constants.get_user_town()}

    constants.initialize_restaurant_df()

    return JsonResponse(location_dict)
    
    