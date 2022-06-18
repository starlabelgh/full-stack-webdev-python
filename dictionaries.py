#Dictionaries
from re import X


myStuff = {"key1":"value", 'key2':'value2', 'key3':{'123':[1,2,'grabMe']}}
print(myStuff['key3']['123'][2].capitalize())

#print my launch
myLunch = {'Lunch':'pizza', 'bfast':'Biscuit Bread'}
myLunch['Lunch'] = 'Waakye'
print(myLunch['Lunch'])
print(myLunch)

x = set()

x.add(1)
x.add('Kofi')
x.add(True)

print(x)

s = 'django'
print(s[0])
print(s[-1])
print(s[:4])
print(s[1:4])
print(s[4:])
print(s[::-1])

l = [3,7,[1,4,'hello']]
l[2][2] = 'goodbye' 
print(l)

d1 = {'simple_key':'hello'}
d2 = {'k1':{'k2':'hello'}}
#d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}

print(d1['simple_key'])
print(d2['k1']['k2'])
#print(d3['k1'][0]['nested_key'][1][0])

age = 4
name = "Sammy"

print("Hello my dog's name is {a} and he is {b} years old.".format(a=age,b=name))