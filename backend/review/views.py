from django.shortcuts import render
from django.http import JsonResponse
import json
import pandas as pd
import copy
from rest_framework.decorators import api_view
from backend.constants import get_user_id
from review.models import ResReview
from customer.models import Customer
from restaurants.models import Restaurant
# Create your views here.
@api_view(['POST'])
def insert_review(request):
    data = request.data
    review = ResReview()
    #print("here", data)
    review.ambiance_rating=data["ambiance_rating"]
    
    review.taste_rating=data["taste_rating"]
    review.service_rating=data["service_rating"]

    #review.customer_need_fast_slow=[data.customer_need]  #Liste olup olmamasına dikkat
    #review.reason_of_visit=data.reason_of_visit
    review.overall_rating= 0.25 * data["ambiance_rating"] + 0.25 * data["service_rating"] + 0.5 * data["taste_rating"]


    customer = Customer.objects.get(user_customer_id = get_user_id())

    #print("CUST", customer)
    review.review_customer = customer
    
    restaurant = Restaurant.objects.get(id = data["restaurant_id"])
    


    review.review_restaurant=restaurant
    review.comment = data["comment"]
    review.save()
    list1=[200]
    return JsonResponse(list1,safe=False)


@api_view(['POST'])
def return_restaurant_reviews(request):
# def return_restaurant_reviews():
    data = request.data
    #print("DATA ", data)
    res_id = data['restaurant_id']
    #print("DATA ", res_id)
    rev_list=[]
    filtered_reviews = ResReview.filter_reviews('review_restaurant','e', res_id, 'overall_rating')
    for review in filtered_reviews:
        rev = {"ambiance_rating": review.ambiance_rating,"service_rating": review.service_rating,
               "taste_rating": review.taste_rating,"overall_rating": review.overall_rating, "comment": review.comment}
        rev_list.append(rev)

    return JsonResponse(rev_list,safe=False)

@api_view(['GET'])
# def return_user_reviews(request):
def return_user_reviews(request):
    
    this_customer = Customer.objects.get(user_customer=get_user_id())
    user_id = this_customer.id
    rev_list=[]
    filtered_reviews = ResReview.filter_reviews('review_customer','e', user_id, 'overall_rating')
    for review in filtered_reviews:

        rev = {"ambiance_rating": review.ambiance_rating,"service_rating": review.service_rating,"restaurant_name": review.review_restaurant.name,
               "taste_rating": review.taste_rating,"overall_rating": review.overall_rating, "comment": review.comment}
        rev_list.append(rev)

    #print("LENGTH ",len(rev_list))

    return JsonResponse(rev_list,safe=False)
