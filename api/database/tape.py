from django.http import HttpResponse
from database.models import Tape
from database import tools
from datetime import datetime
import json


def list(request):
    if (request.method != "GET"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    tapeList = Tape.objects.all().order_by("-queryTime")
    result = []
    for tape in tapeList:
        result.append(tools.tapeToDict(tape))
    return HttpResponse(json.dumps(result), content_type="application/json")


def latest(request):
    if (request.method != "GET"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    tapeList = Tape.objects.all().order_by("-queryTime")
    result = {}
    for tape in tapeList:
        result = tools.tapeToDict(tape)
        break
    return HttpResponse(json.dumps(result), content_type="application/json")


def edit(request):
    if (request.method != "POST"):
        return HttpResponse("Invalid HTTP Method!", status=400)
    body = json.loads(request.body)
    if ("tapeId" not in body.keys()):
        tape = Tape()
        if ("query" not in body.keys()):
            return HttpResponse("Query Missing!", status=400)
        tape.query = body["query"]
    else:
        try:
            id = body["tapeId"]
            tape = Tape.objects.get(id=id)
        except:
            return HttpResponse("Tape Not Found!", status=400)
        if ("reply" not in body.keys()):
            return HttpResponse("Reply Missing!", status=200)
        tape.reply = body["reply"]
        tape.replyTime = datetime.now()
    tape.save()
    return HttpResponse("Published Successfully!", status=200)
