from django.db import models
from django.db.models.signals import post_save
from django.core.exceptions import ValidationError
from django.dispatch import receiver


def validate_positive(value):
    if value < 0:
        raise ValidationError("cannot be negative.")

# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField(validators=[validate_positive]) 
    unit_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    expirery = models.DateField()
    
    def __str__(self) -> str:
        return self.name
    
class Sale(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sales')
    quantity = models.PositiveIntegerField(validators=[validate_positive])
    sale_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.product.name

@receiver(post_save, sender=Sale)
def _post_save_receiver(sender, instance, **kwargs):
    if kwargs['created']:  # Only execute for new instances (i.e., new sales)
        product = instance.product
        if product.quantity >= instance.quantity:
            product.quantity -= instance.quantity
            product.save()
        else:
            instance.delete()
    
