"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.static import serve
import os
from api import settings
from database import blog, broadcast, tape, user, views

urlpatterns = [

    re_path(r'mdeditor/', include('mdeditor.urls')),
	
	re_path(r'^media/image/(?P<path>.*)$', serve, {"document_root": os.path.join(settings.MEDIA_ROOT, 'image')}),

    path('admin/', admin.site.urls),

    path('csrf/', views.csrf),

    path('user/', user.getInfo),
    path('user/register/', user.register),
    path('user/login/', user.login),
    path('user/logout/', user.logout),

    path('broadcast/list/', broadcast.list),
    path('broadcast/latest/', broadcast.latest),
    path('broadcast/edit/', broadcast.edit),

    path('blog/list/', blog.list),
    path('blog/latest/', blog.latest),
    path('blog/detail/', blog.detail),
    path('blog/edit/', blog.edit),

    path('tape/list/', tape.list),
    path('tape/latest/', tape.latest),
    path('tape/detail/', tape.detail),
    path('tape/edit/', tape.edit),

]
