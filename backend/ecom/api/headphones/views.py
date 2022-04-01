from .serializers import HeadphonesSerializer
from rest_framework import viewsets
from .models import Headphones

# Create your views here.


class HeadphonesViewSet(viewsets.ModelViewSet):
    queryset = Headphones.objects.all().order_by()
    serializer_class = HeadphonesSerializer
