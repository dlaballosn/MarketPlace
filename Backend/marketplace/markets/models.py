from django.db import models

# Create your models here.

class User(models.Model):
    class Meta:
        abtrasct = True
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)


class Seller(User):
    pass


class Buyer(User):
    pass

class Store(models.Model):
    name