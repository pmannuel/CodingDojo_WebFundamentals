# #Find and Replace
# str = "If monkeys like bananas, then I must be a monkey!"
# print str.find('monkey'), str.find('monkey', str.find('monkey')+1)
# print str.replace("monkey", "alligator")
#
# # Min and Max
# x = [2, 54, -2, 7, 12, 98]
# print "the max is {} and the mean is {}".format(max(x), min(x))
#
# #First and Last
# x = ["hello",2,54,-2,7,12,98,"world"]
# print x[0], x[len(x)-1]

#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
neg_x = x[0:2]
x.pop(0)
x.pop(0)
print neg_x
x.insert(0,neg_x)
print x
