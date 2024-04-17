from products_app.models import Product, Sale
from products_app.api.serializers import ProductSerializer, SaleSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@api_view(['GET', 'POST'])
def sales_list(request):
    if request.method == 'GET':
        sales = Sale.objects.all()
        serializer = SaleSerializer(sales, many = True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = SaleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)



@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, pk):
    if request.method == 'GET':
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
        
    if request.method == 'DELETE':
        product = Product.objects.get(pk=pk)
        product.delete()
        return Response("Product was deleted")
        