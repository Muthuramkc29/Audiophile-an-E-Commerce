from django.db import models
from api.category.models import Category

# Create your models here.


class Product(models.Model):
    newProduct = models.BooleanField(default=False)
    name = models.CharField(max_length=50, default='')
    nameProduct = models.CharField(max_length=50, default=True)
    description = models.CharField(max_length=255, default='')
    price = models.CharField(max_length=200, default='')
    stock = models.BooleanField(default=True, blank=True)
    feature1 = models.CharField(max_length=500, default='')
    feature2 = models.CharField(max_length=500, default='')
    inTheBox1 = models.CharField(max_length=50, default='')
    inTheBox2 = models.CharField(max_length=50, default='')
    inTheBox3 = models.CharField(max_length=50, default='')
    inTheBox4 = models.CharField(max_length=50, default='')
    productImageMobile = models.ImageField(upload_to='images/', null=True)
    productImageTablet = models.ImageField(upload_to='images/', null=True)
    productImageDesktop = models.ImageField(upload_to='images/', null=True)
    productGridImage1Mob = models.ImageField(upload_to='images/', null=True)
    productGridImage1Tab = models.ImageField(upload_to='images/', null=True)
    productGridImage1Desktop = models.ImageField(
        upload_to='images/', null=True)

    productGridImage2Mob = models.ImageField(upload_to='images/', null=True)
    productGridImage2Tab = models.ImageField(upload_to='images/', null=True)
    productGridImage2Desktop = models.ImageField(
        upload_to='images/', null=True)

    productGridImage3Mob = models.ImageField(upload_to='images/', null=True)
    productGridImage3Tab = models.ImageField(upload_to='images/', null=True)
    productGridImage3Desktop = models.ImageField(
        upload_to='images/', null=True)

    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
