from .serializers import EarphonesSerializer
from rest_framework import viewsets
from .models import Earphones

# Create your views here.


class EarphonesViewSet(viewsets.ModelViewSet):
    queryset = Earphones.objects.all().order_by()
    serializer_class = EarphonesSerializer
