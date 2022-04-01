from rest_framework import serializers
from .models import Headphones


class HeadphonesSerializer(serializers.HyperlinkedModelSerializer):

    productMobile = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productTablet = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productDesktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    class Meta:
        model = Headphones
        fields = ('newProduct', 'name', 'description', 'productMobile',
                  'productTablet', 'productDesktop')
