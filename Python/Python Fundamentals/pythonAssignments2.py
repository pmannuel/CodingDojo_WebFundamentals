#---PART I---#
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
#
# for i in range(0,len(students)):
#     print students[i]["first_name"], students[i]["last_name"]

#---PART II---#
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

for key in users:
    print key
    index = 1
    for data in key:
        name_len = len(data["first_name"]) + len(data["last_name"])
        print index, "-", data["first_name"], data["last_name"], "-", name_len
        index += 1

# for key, data in users.items():
#     print key
#     # print data
#     index = 1
#     for value in data:
#         # print value
#         name_len = len(value["first_name"]) + len(value["last_name"])
#         print index, "-", value["first_name"], value["last_name"], "-", name_len
#         index += 1
