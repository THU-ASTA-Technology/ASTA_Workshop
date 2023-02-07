from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
###########################################################
# TODO:                                                   #
# create models: User and Broadcast                       # 
# for User, it includes name, WechatID                    #
# for Broadcast, it includes time and content             #
#                                                         # 
# Hint: for time, try models.DateTimeField                #
#-------------------START YOUR CODE HERE-------------------
class User(AbstractUser):
    name = models.CharField(max_length=100, default="", blank=False)
    WechatID = models.CharField(max_length=100, default="", blank=True)
    def __str__(self):
        return self.username
    
class Broadcast(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=100, default="", blank=False)



#--------------------END YOUR CODE HERE--------------------

