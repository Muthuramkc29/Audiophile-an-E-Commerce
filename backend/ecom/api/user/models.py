import email
from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# Model For Custom User


class CustomUser(AbstractUser):
    name = models.CharField(max_length=250, default="Anonymous")
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    session_token = models.CharField(max_length=10, default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
