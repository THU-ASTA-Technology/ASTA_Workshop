from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token

# Create your views here.
def csrf_failure(request, reason=""):
    return HttpResponse("Please Set CSRF Token", status=403)

def csrf(request):
    return JsonResponse({"csrftoken": get_token(request)})