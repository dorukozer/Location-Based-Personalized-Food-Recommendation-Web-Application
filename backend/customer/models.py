from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Customer(models.Model):
    # ID field is written automatically by Django
    interest_preference = models.CharField(max_length=200, null=False)
    ambiance_preference = models.CharField(max_length=200, null=False)
    cuisine_preference = models.CharField(max_length=200, null=False)
    flavor_preference = models.CharField(max_length=200, null=False)
    budget_customer = models.IntegerField(null=False, default=1)


    # Extra fields that are not used by the ML model
    user_customer = models.ForeignKey(User, on_delete=models.CASCADE)

