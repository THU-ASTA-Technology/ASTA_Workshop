from django.db import models
from django.contrib.auth.models import AbstractUser
from mdeditor.fields import MDTextField

# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=100, default="", blank=False)
    wechatID = models.CharField(max_length=100, default="", blank=True)
    def __str__(self):
        return self.username

class Broadcast(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=100, default="", blank=False)

class Tape(models.Model):
    query = models.CharField(max_length=100, default="", blank=False)
    queryTime = models.DateTimeField(auto_now_add=True)
    reply = models.CharField(max_length=100, default="", blank=True)
    replyTime = models.DateTimeField(blank=True, null=True)

# hint: blog model provided for your convenience
class Blog(models.Model):
    title = models.CharField(max_length=128, default="", blank=False)
    initTime = models.DateTimeField(auto_now_add=True)
    lastTime = models.DateTimeField(auto_now_add=True)
    content = MDTextField()
