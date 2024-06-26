# Generated by Django 5.0.3 on 2024-04-02 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products_app", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.IntegerField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("quantity", models.IntegerField()),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("expirery", models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name="Inventory",
        ),
    ]
