# #Assignment: Scores and Grades
# import random
# score = random.randint(60,100)
# print "Your score is {}".format(score)
#
# def grade(mark):
#     if mark >= 90:
#         grade = "A"
#     if mark >= 80 and mark < 90:
#         grade = "B"
#     if mark >= 70 and mark <80:
#         grade = "C"
#     if mark <70:
#         grade = "D"
#     print "Score: {}; Your grade is {}".format(mark,grade)
#
# #test function
# grade(score)

#---Assignment: Coin Tosses---#
# def cointosses():
#     head = 0
#     tail = 0
#     for count in range(1,5):
#         import random
#         #headortail = round(random.random())
#         print headortail
#         if headortail == 1.0:
#             head += 1
#             face = "head"
#         else:
#             tail += 1
#             face = "tail"
#         print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(count, face, head, tail)
#     return
#
# #test function
# cointosses()

#---Assignment: Stars---#
def stars(arr):
    if arr == []:
        print "error: please input an array"
        return
    else:
        for i in range(0, len(arr)):
            stars_arr = ""
            for count in range(0,arr[i]):
                stars_arr += "*"
            print stars_arr
    return

#test function
x = []
stars(x)
