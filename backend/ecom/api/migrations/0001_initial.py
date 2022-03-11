import email
from random import seed
from unicodedata import name
from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):

    def seed_data(apps, schema_editor):
        user = CustomUser(name="Muthuram", email="king@lco.dev",
                          phone="987654321", gender="Male", is_staff=True, is_superuser=True)
        user.set_password("12345")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data)
    ]
