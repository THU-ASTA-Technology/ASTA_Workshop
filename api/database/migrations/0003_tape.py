# Generated by Django 4.1.5 on 2023-02-08 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0002_broadcast_user_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tape',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query', models.CharField(default='', max_length=100)),
                ('queryTime', models.DateTimeField(auto_now_add=True)),
                ('reply', models.CharField(blank=True, default='', max_length=100)),
                ('replyTime', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]
