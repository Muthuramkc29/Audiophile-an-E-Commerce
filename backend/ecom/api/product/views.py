from rest_framework import viewsets
from .models import Product
from .serializers import ProductSeralizer

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSeralizer
