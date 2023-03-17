def userToDict(user):
    result = {}
    result["userId"] = user.id
    result["username"] = user.username
    return result

def broadcastToDict(broadcast):
    result = {}
    result["broadcastId"] = broadcast.id
    result["time"] = broadcast.time.strftime('%Y-%m-%d %H:%M:%S')
    result["content"] = broadcast.content
    return result
    
def tapeToDict(tape):
    result = {}
    result["tapeId"] = tape.id
    result["query"] = tape.query
    result["queryTime"] = tape.queryTime.strftime('%Y-%m-%d %H:%M:%S')
    result["reply"] = tape.reply
    result["replyTime"] = tape.replyTime.strftime('%Y-%m-%d %H:%M:%S') if tape.replyTime else ""
    return result

def blogToDict(blog):
    result = {}
    result["blogId"] = blog.id
    result["title"] = blog.title
    result["initTime"] = blog.initTime.strftime('%Y-%m-%d %H:%M:%S')
    result["lastTime"] = blog.lastTime.strftime('%Y-%m-%d %H:%M:%S')
    result["content"] = blog.content
    return result

