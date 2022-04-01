from django.db import models

# Create your models here.


class Headphones(models.Model):
    name = models.TextField(max_length=50)
    description = models.TextField(max_length=255)
    newProduct = models.BooleanField(default=False)
    productMobile = models.ImageField(
        upload_to='images/', null=True, blank=True)
    productTablet = models.ImageField(
        upload_to='images/', null=True, blank=True)
    productDesktop = models.ImageField(
        upload_to='images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
