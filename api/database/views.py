from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token

# Create your views here.

# We provide these two views for you. Better not change.
def csrf_failure(request, reason=""):
    return HttpResponse("Please Set CSRF Token", status=403)

def csrf(request):
    return JsonResponse({"csrftoken": get_token(request)})