from .serializers import CategorySerializer
from rest_framework import viewsets
from .models import Category

# Create your views here.


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by()
    serializer_class = CategorySerializer
