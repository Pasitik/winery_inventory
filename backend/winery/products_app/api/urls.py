from django.urls import path, include
from products_app.api.views import product_list, product_detail
urlpatterns = [
    path("list/", product_list, name='products'),
    path('<int:pk>/', product_detail, name='product-detail')
]
