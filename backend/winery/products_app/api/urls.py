from django.urls import path, include
from products_app.api.views import product_list, product_detail, sales_list
urlpatterns = [
    path("list/", product_list, name='products'),
    path("sales_list/", sales_list, name='sales'),
    path('<int:pk>/', product_detail, name='product-detail')
]
