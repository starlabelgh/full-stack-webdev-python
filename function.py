from cgitb import reset
from unittest import result


def addnNum(num1, num2):
    if type(num1) == type(num2) == type(10):
        return num1+num2
    else:
        return "Sorry, I need Intergers only!"
    
result = addnNum("3","20")
print(result)


#Lamda Expression

#Filter function
myList = [1,2,3,4,5,6,7,8]

# def even_bool(num):
#     return num%2 == 0
# evens = filter(even_bool,myList)

evens = filter(lambda num:num%2 == 0, myList)
print(list(evens))