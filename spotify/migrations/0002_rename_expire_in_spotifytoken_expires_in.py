# Generated by Django 4.2.1 on 2023-06-19 18:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='spotifytoken',
            old_name='expire_in',
            new_name='expires_in',
        ),
    ]