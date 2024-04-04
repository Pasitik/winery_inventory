from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField() 
    price = models.DecimalField(max_digits=10, decimal_places=2)
    expirery = models.DateField()
    
    def __str__(self) -> str:
        return self.name
    
    
