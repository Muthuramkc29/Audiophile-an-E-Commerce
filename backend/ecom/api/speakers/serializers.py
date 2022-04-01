from rest_framework import serializers
from .models import Speakers


class SpeakersSerializer(serializers.HyperlinkedModelSerializer):

    productMobile = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productTablet = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productDesktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    class Meta:
        model = Speakers
        fields = ('newProduct', 'name', 'description', 'productMobile',
                  'productTablet', 'productDesktop')
