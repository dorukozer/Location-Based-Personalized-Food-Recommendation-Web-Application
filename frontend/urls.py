from django.urls import path
from backend.views import *

urlpatterns = [
    path('',index),
    path('calendar',index),
    path('create',index),

]