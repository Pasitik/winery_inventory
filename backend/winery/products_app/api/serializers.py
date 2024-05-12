from rest_framework import serializers
from products_app.models import Product, Sale

# class ProductSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only = True)
#     name = serializers.CharField()
#     quantity = serializers.IntegerField()
#     price = serializers.DecimalField(max_digits=10, decimal_places=2)
#     expirery = serializers.DateField()
    
    
#     def create(self, validated_data):
#         return Product.objects.create(**validated_data)
    
    
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.quantity = validated_data.get('quantity', instance.quantity)
#         instance.price = validated_data.get('price', instance.price)
#         instance.expirery = validated_data.get('expirery', instance.expirery)
#         instance.save()
#         return instance
    
class SaleSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), source='product')
    quantity = serializers.IntegerField()
    sale_date = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        # Create and return a new Sale instance using the validated data
        return Sale.objects.create(**validated_data)
    

class ProductSerializer(serializers.ModelSerializer):
    sales = SaleSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'unit_cost', 'price', 'quantity', 'expirery', 'sales']

    def create(self, validated_data):
         return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Update and return an existing Sale instance using the validated data
        instance.product = validated_data.get('product', instance.product)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance
    
    
    # def create(self, validated_data):
    #     return Sale.objects.create(**validated_data)
    
    
    # def update(self, instance, validated_data):
    #     instance.name = validated_data.get('name', instance.name)
    #     instance.quantity = validated_data.get('quantity', instance.quantity)
    #     instance.price = validated_data.get('price', instance.price)
    #     instance.expirery = validated_data.get('expirery', instance.expirery)
    #     instance.save()
    #     return instance