from unicodedata import name
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'', views.OrderViewSet,)
urlpatterns = [
    path("add/<str:id>/<str:token>/",
         views.add, name="add-order"),
    path("", include(router.urls))
]
