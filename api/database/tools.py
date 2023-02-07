def userToDict(user):
    result = {}
    result["userId"] = user.id
    result["username"] = user.username
    return result

def broadcastToDict(broadcast):
    result = {}

    ###########################################################
    # TODO:                                                   #
    # take userToDict funtion as an example. Finish function  # 
    # broadcastToDict.  You need to set members of broadcast  #
    # as keys of dictionary(result), and set value of members # 
    # as value of dictionary(result).                         #
    #-------------------START YOUR CODE HERE-------------------
    
    result["broadcastId"] = broadcast.id
    result["time"] = broadcast.time.strftime('%Y-%m-%d %H:%M:%S')
    result["content"] = broadcast.content

    #--------------------END YOUR CODE HERE--------------------
    return result