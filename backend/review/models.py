from django.db import models
from customer.models import Customer
from restaurants.models import Restaurant


# Create your models here.
class ResReview(models.Model):
    # ID field is written automatically by Django
    review_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, default=0)
    review_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, default=0)
    
    ambiance_rating = models.IntegerField(null=False, default=1)
    taste_rating = models.IntegerField(null=False, default=1)
    service_rating = models.IntegerField(null=False, default=1) 
    customer_need_fast_slow = models.CharField(max_length=30)
    reason_of_visit = models.CharField(max_length=50)
    overall_rating = models.FloatField(null=False, default=1)  
    
    comment = models.CharField(max_length=200, default="")



    @classmethod
    def filter_reviews(cls, field, operation, value, order_by):
        #print("Field: ", field, "Operation: ", operation, "  Value: ", value, "  Order by: ", order_by)
        # Get all Restaurants
        reviews = ResReview.objects.all()
        """
        if field == "name":
            for i in range(4):
                res = restaurants[i]
                print("name: ", res.name)
                print("name (val): ", value)

                print("len: ", len(res.name))
                print("len (val): ", len(value))
        """
        # Filter on field name based on Operator
        if operation == 'e':
            return cls.objects.filter(**{field: value}).order_by(order_by)
        elif operation in ['lte','lt','gte', 'gt']:
            field_name = field + '__' + operation
            return cls.objects.filter(**{field_name: value}).order_by(order_by) 