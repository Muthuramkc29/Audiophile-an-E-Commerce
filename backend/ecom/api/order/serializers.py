from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    model = Order
    fields = ('user')
    # TODO:(add product and quantity)
