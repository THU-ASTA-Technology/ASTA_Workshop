from django.http import HttpResponse
from database.models import Broadcast
from database import tools
import json

def list(request):
    if (request.method != "GET"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    broadcastList = Broadcast.objects.all().order_by("-time")
    result = []
    for broadcast in broadcastList:
        result.append(tools.broadcastToDict(broadcast))
    return HttpResponse(json.dumps(result), content_type="application/json")

def latest(request):
    if (request.method != "GET"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    broadcastList = Broadcast.objects.all().order_by("-time")
    result = {}
    for broadcast in broadcastList:
        result = tools.broadcastToDict(broadcast)
        break
    return HttpResponse(json.dumps(result), content_type="application/json")

def edit(request):
    if (request.method != "POST"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    body = json.loads(request.body)
    if ("content" not in body.keys()):
        return HttpResponse("Content Missing!", status=400)
    content = body["content"]
    broadcast = Broadcast()
    broadcast.content = content
    broadcast.save()

    return HttpResponse("Published Successfully!", status=200)