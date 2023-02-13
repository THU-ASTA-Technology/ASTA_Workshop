from django.http import HttpResponse
from database.models import Blog
from database import tools
from datetime import datetime
import json

# hint: refer to tape.py
def list(request):
    # TODO: return all blogs order by -lastTime
    pass

def latest(request):
    # TODO: return the latest blog
    pass


def detail(request):
    # TODO: return info of specific blog according blogId in GET
    pass


def edit(request):
    # TODO: publish a new one or edit the existing one.
    # hint: check if blogId in POST
    pass

