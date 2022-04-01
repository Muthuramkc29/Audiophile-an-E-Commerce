from rest_framework import serializers
from .models import Earphones


class EarphonesSerializer(serializers.HyperlinkedModelSerializer):

    productMobile = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productTablet = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productDesktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    class Meta:
        model = Earphones
        fields = ('newProduct', 'name', 'description', 'productMobile',
                  'productTablet', 'productDesktop')
