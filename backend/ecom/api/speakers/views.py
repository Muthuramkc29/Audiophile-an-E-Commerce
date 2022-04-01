from .serializers import SpeakersSerializer
from rest_framework import viewsets
from .models import Speakers

# Create your views here.


class SpeakersViewSet(viewsets.ModelViewSet):
    queryset = Speakers.objects.all().order_by()
    serializer_class = SpeakersSerializer
