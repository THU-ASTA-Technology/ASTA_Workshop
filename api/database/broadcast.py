from database.models import Broadcast
from django.http import HttpResponse
from database import tools
import json

def list(request):
    result = []
    ###########################################################
    # TODO:                                                   #
    # Finish the list funtion. The param is a GET request and # 
    # you need to return a httpresponse, the format of data   #
    # should be json.                                         #
    #                                                         #
    # You just need to put all broadcast into the result list.#
    # We provide tools.broadcastToDict() function for you.    #
    #-------------------START YOUR CODE HERE-------------------
    if request.method != "GET":
        return HttpResponse("Invalid HTTP Method!", status=400)
    broadcastList = Broadcast.objects.all().order_by("-time")
    for broadcast in broadcastList:
        result.append(tools.broadcastToDict(broadcast))

    #--------------------END YOUR CODE HERE--------------------
    return HttpResponse(json.dumps(result), content_type="application/json")
    

def latest(request):
    result = {}
    ###########################################################
    # TODO:                                                   #
    # Finish the latest funtion. The param is a GET request   # 
    # and you need to return a httpresponse, the format of    #
    # data should be json.                                    #
    #                                                         #
    # You just need to put the first broadcast into the result#
    # We provide tools.broadcastToDict() function for you.    #
    #-------------------START YOUR CODE HERE-------------------
    if request.method != "GET":
        return HttpResponse("Invalid HTTP Method!", status=400)
    broadcastList = Broadcast.objects.all().order_by("-time")
    result = tools.broadcastToDict(broadcastList.first())
    #--------------------END YOUR CODE HERE--------------------
    return HttpResponse(json.dumps(result), content_type="application/json")

def edit(request):
    ###########################################################
    # TODO:                                                   #
    # Finish the edit funtion. The param is a POST request    # 
    # and you need to return a httpresponse, the format of    #
    # data should be json.                                    #
    #                                                         #
    # You need to load the content from the body of POST. And #
    # create a new instance of broadcast model                #
    #                                                         #
    # Hint: use json.loads() for the body of POST             #
    #-------------------START YOUR CODE HERE-------------------
    pass
    
    #--------------------END YOUR CODE HERE--------------------