#Read and open 'Pride and Prejudice' file
file = open("pandp", "r")
print file.read()
# re.split()

import re
def get_matching_words(regex):
 matches = []
 for word in text:
 	if re.search(regex,word):
 		matches.append(word)
        print matches
 return matches

get_matching_words("wife")
