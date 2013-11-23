from django.contrib.gis.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit

class Category(models.Model):
    name = models.CharField(max_length=30)


class Image(models.Model):
    image = ProcessedImageField(upload_to=settings.UPLOAD_DIR+"images",
                                processors=[ResizeToFit(460)],
                                format='JPEG',
                                options={'quality': 60})


class User(models.Model):
    class Meta:
        abstract = True
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    email = models.EmailField(max_length=30, unique=True)


class Seller(User):
    pass


class Buyer(User):
    pass


class Store(models.Model):
    name = models.CharField(max_length=100)
    image = models.ForeignKey("Image")
    location = models.PointField(srid=4326, null=True, blank=True)
    objects = models.GeoManager()


class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey("Category")
    images = models.ManyToManyField("Image")


class ProductInStore(models.Model):
    product = models.ForeignKey("Product")
    store = models.ForeignKey("Store")
    price = models.FloatField()
    created = models.DateTimeField()


class Wishlist(models.Model):
    buyer = models.ForeignKey("Buyer")
    products = models.ManyToManyField("ProductInStore")


class Payment(models.Model):
    methods = (("PP", "PayPal"),
               ("TD", "On take away or delivery"))

    method = models.CharField(max_length=2, choices=methods)
    code = models.CharField(max_length=500)
    complete = models.BooleanField()


class Order(models.Model):

    statuses = (("PE", "Pending"),
                ("AC", "Accepted"),
                ("SP", "Pending to deliver"),
                ("TP", "Pending to take away"),
                ("FI", "Finished"))

    product = models.ForeignKey("ProductInStore")
    quantity = models.IntegerField()
    order_datestamp = models.DateTimeField()
    status = models.CharField(max_length=2, choices=statuses)
    payment = models.ForeignKey("Payment")

