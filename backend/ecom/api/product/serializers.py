from rest_framework import serializers
from .models import Product


class ProductSeralizer(serializers.HyperlinkedModelSerializer):
    productImageMobile = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productImageTablet = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productImageDesktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    productGridImage1Mob = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage1Tab = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage1Desktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    productGridImage2Mob = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage2Tab = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage2Desktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    productGridImage3Mob = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage3Tab = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)
    productGridImage3Desktop = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    class Meta:
        model = Product
        fields = ('id', 'newProduct', 'name', 'nameProduct', 'description', 'price', 'stock', 'feature1', 'feature2', 'inTheBox1', 'inTheBox2',
                  'inTheBox3', 'inTheBox4', 'productImageMobile', 'productImageTablet', 'productImageDesktop', 'category', 'productGridImage1Mob', 'productGridImage1Tab', 'productGridImage1Desktop', 'productGridImage2Mob', 'productGridImage2Tab', 'productGridImage2Desktop', 'productGridImage3Mob', 'productGridImage3Tab', 'productGridImage3Desktop')
