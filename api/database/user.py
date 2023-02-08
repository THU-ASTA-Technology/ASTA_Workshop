from database.models import User
from django.http import HttpResponse
import json
from django.contrib import auth
from django.utils import timezone
from database import tools

# Create your views here.
# -----------------------------------------------------------

def login(request):
    if request.method != 'POST':
        return HttpResponse('Invalid request method!', status=400)
    body = json.loads(request.body)
    if('username' not in body.keys()):
        return HttpResponse('Username missing!', status=400)
    if('password' not in body.keys()):
        return HttpResponse('Password missing!', status=400)
    username = body.get('username')
    password = body.get('password')
    username = body["username"]
    password = body["password"]
    user = auth.authenticate(username=username, password=password)
    if user:
        auth.login(request, user)
        return HttpResponse("Login Successfully!", status=200)
    else:
        return HttpResponse("Invalid Username or Password!", status=400)
    # pass

def getInfo(request):
    if (request.method != "GET"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    if (request.user.is_authenticated):
        return HttpResponse(json.dumps(tools.userToDict(request.user)), content_type="application/json")
    try:
        id = request.GET.get("userId")
        user = User.objects.get(id = id)
    except:
        return HttpResponse("User Not Found!", status=400)
    return HttpResponse(json.loads(tools.userToDict(user)), content_type="application/json")

def logout(request):
    try:
        auth.logout(request)
    except:
        return HttpResponse("Logout Failed!", status=400)
    return HttpResponse("Logout Successfully!", status=200)

def register(request):
    if (request.method != "POST"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    body = json.loads(request.body)
    if ("username" not in body.keys()):
        return HttpResponse("Username Missing!", status=400)
    if ("password" not in body.keys()):
        return HttpResponse("Password Missing!", status=400)
    username = body["username"]
    password = body["password"]
    if (len(User.objects.all())):
        return HttpResponse("Only One User Is Allowed To Register", status=400)
    if (len(User.objects.filter(username=username))):
        return HttpResponse("Username Existed!", status=400)
    user = User.objects.create_user(username=username, password=password)
    return HttpResponse("Register Successfully!", status=200)