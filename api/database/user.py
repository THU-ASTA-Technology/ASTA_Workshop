# from database.models import User
# from django.http import HttpResponse
# import json
# from django.contrib import auth

# def register(request):
#     if (request.method != "POST"):
#         return HttpResponse("Invalid HTTP Method!", status=400)
#     body = json.loads(request.body)
#     if ("username" not in body.keys()):
#         return HttpResponse("Username Missing!", status=400)
#     if ("password" not in body.keys()):
#         return HttpResponse("Password Missing!", status=400)
#     username = body["username"]
#     password = body["password"]
#     #if (len(User.objects.all())):
#     #    return HttpResponse("Only One User Is Allowed To Register", status=400)
#     if (len(User.objects.filter(username=username))):
#         return HttpResponse("Username Existed!", status=400)
#     user = User.objects.create_user(username=username, password=password)
#     return HttpResponse("Register Successfully!", status=200)

# def login(request):
#     if (request.method != "POST"):
#         return HttpResponse("Invalid HTTP Method!", status=400)
#     body = json.loads(request.body)
#     if ("username" not in body.keys()):
#         return HttpResponse("Username Missing!", status=400)    
#     if ("password" not in body.keys()):
#         return HttpResponse("Password Missing!", status=400)
#     username = body["username"]
#     password = body["password"]
#     user = auth.authenticate(username=username, password=password)
#     if user:
#         auth.login(request, user)
#         return HttpResponse("Login Successfully!", status=200)
#     else:
#         return HttpResponse("Invalid Username or Password!", status=400)
    
# def logout(request):
#     auth.logout(request)
#     return HttpResponse("Log Out!")