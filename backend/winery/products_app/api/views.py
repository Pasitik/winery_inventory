from products_app.models import Product
from products_app.api.serializers import ProductSerializer 
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view()
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view()
def product_detail(request, pk):
    product = Product.objects.get(pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)