from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
import pandas as pd
import copy
from rest_framework.decorators import api_view
from backend.constants import get_user_id
from customer.models import Customer
from backend.constants import get_rov

# Create your views here.
@api_view(['POST'])
def insert_cuisine_preferences(request):
    data = request.data
    this_customer = Customer(user_customer_id=get_user_id(),cuisine_preference =list(data.keys()))
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_ambiance_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.ambiance_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_flavor_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.flavor_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_interest_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.interest_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)


def retrieve_preferences(request):
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    interest_preferences = this_customer.interest_preference
    ambiance_preferences = this_customer.ambiance_preference
    cuisine_preferences = this_customer.cuisine_preference
    flavor_preferences = this_customer.flavor_preference
    budget = this_customer.budget_customer
    #reason_of_visit = "['Family']"
    reason_of_visit = get_rov()
    print(reason_of_visit =="['Family']" )
    print("REASON OF VISIT AAAAA",reason_of_visit )

    resp_dict = {"customer_id": this_customer.id,
                         "interest_preference": interest_preferences, 
                         "ambience_preference": ambiance_preferences, 
                         "cuisine_preference": cuisine_preferences,
                         "flavor_preference": flavor_preferences,
                         "budget_customer": budget,
                         "reason_of_visit": reason_of_visit}
    
    resp_json = JsonResponse(resp_dict)

    # create DataFrame from dictionary
    df = pd.DataFrame(resp_dict, index=[0])

    #print(df["ambience_preference"])

    customer_df = create_customer_df(df)
    #print(customer_df["ambience_preference"])

    context_df = prepare_context(customer_df)
    #print(context_df["Elegant"])
    #print(context_df["Reading"])
    #print(context_df["Ethnic"])
    #print(context_df["Guest"])
    #print(context_df["Work"])

    return context_df

def create_customer_df(df):
  cust = copy.deepcopy(df)
  columns_to_vectorize = ['interest_preference', 'ambience_preference', 'cuisine_preference', 'flavor_preference','reason_of_visit']

  # Vectorize the columns and create new dataframes
  vectorized_dfs = []

  vectorized_dfs.append(cust['customer_id'])
  for col in columns_to_vectorize:
      # Concatenate the list of strings into a single string
      text = cust[col].apply(lambda lst: ''.join(lst))
      # Vectorize the text and create a new dataframe
      for i,s in enumerate(text): 
        txt = s.replace("[", "").replace(",", "|").replace("]", "").replace('\'',"").replace("-","").replace(" ","")
        words = txt.split()
        sorted_words = sorted(words)
        text[i] = " ".join(sorted_words)
      vectorized_dfs.append(text)
  vectorized_dfs.append(cust['budget_customer'])

  result_cus = pd.concat(vectorized_dfs, axis=1)
  return result_cus

def prepare_context(dtf_context):
  
  dtf_context_= copy.deepcopy(dtf_context)
  columns = ['FamilyFriendly', 'Ethnic', 'Romantic', 'Lively', 'Elegant', 'Sport', 'FineDining', 'Cozy', 'CasualDining']
  
  for col in columns:
      dtf_context_[col] = dtf_context["ambience_preference"].apply(lambda x: 1 if col in x else 0)

  columns = ['Foodie', 'Music', 'Traveller', 'Family', 'Hectic', 'Reading', 'Clasic', 'Student', 'Cinema', 'StandUp', 'Experiments', 'ESport', 'Theatre', 'Businessman', 'SportsPerson']
  for col in columns:
      rename_col = col
      if col == "Family":
        rename_col = "Family_profile"
      dtf_context_[rename_col] = dtf_context["interest_preference"].apply(lambda x: 1 if col in x else 0)

  columns = ['Family', 'Guest', 'Work', 'Date', 'Friend']
  #print(columns)
  for col in columns:
      dtf_context_[col] = dtf_context["reason_of_visit"].apply(lambda x: 1 if col in x else 0)

  columns = ['Turkish', 'Korean', 'Japanese', 'Greek', 'Cafeteria', 'Seafood', 'Dutch', 'French', 'LatinAmerican', 'BarPubBrewery', 'Asian', 'Wine', 'American', 'Juice', 'IceCream', 'Mexican', 'Burgers', 'Sandwiches', 'Pizzeria', 'Coffee', 'Steaks', 'Italian', 'Chinese', 'African', 'International', 'Contemporary', 'FastFood', 'Bakery', 'Bar', 'Vegetarian']
  for col in columns:
      dtf_context_[col] = dtf_context["cuisine_preference"].apply(lambda x: 1 if col in x else 0)

  columns = ['ramen', 'tomato', 'umami', 'mustard', 'mcncheese', 'spicy', 'snacks', 'pasta', 'doner', 'salsa', 'herbs', 'taco', 'waffle', 'fish', 'crab', 'snack', 'tofu', 'wrap', 'charcuterie', 'kimchi', 'icecream', 'cake', 'pastry', 'panini', 'vegetable', 'wine', 'stew', 'juice', 'sushi', 'fusion', 'curry', 'vegeterian', 'smoke', 'sousage', 'seafood', 'global', 'diverse', 'shrimp', 'kebab', 'cofee', 'patato', 'fry', 'pubfood', 'cheese', 'salad', 'tex_mex', 'boiled', 'salty', 'soup', 'tempura', 'bread', 'beer', 'sweet', 'rice', 'cocktail', 'pizza', 'meat', 'souce', 'grill', 'fruit', 'indigenous', 'chicken', 'tapas', 'burger', 'fermented', 'burrito', 'tea', 'bbq', 'smoothie', 'eclectic', 'truffle', 'noodle', 'risotto', 'fresh', 'feta', 'world', 'oil', 'sandwich', 'baklava', 'souvlaki', 'modern', 'aromatic', 'chocolate']
  for col in columns:
      dtf_context_[col] = dtf_context["flavor_preference"].apply(lambda x: 1 if col in x else 0)
  dtf_context_3= dtf_context_
  dtf_context_3=dtf_context_3.drop(['reason_of_visit','ambience_preference','interest_preference','cuisine_preference','flavor_preference'], axis=1)
  #print("\nDTF CONTEXT 3: \n", dtf_context_3)
  return dtf_context_3


