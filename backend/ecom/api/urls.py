from django.urls import path, include
from rest_framework.authtoken import views
from .views import home

urlpatterns = [
    path('', home, name="api-home"),
    path('headphones/', include('api.headphones.urls')),
    path('earphones/', include('api.earphones.urls')),
    path('speakers/', include('api.speakers.urls')),
    path('products/', include('api.product.urls')),
    path('user/', include('api.user.urls')),
    path('order/', include('api.order.urls')),
    path('payment/', include('api.payment.urls')),
]
