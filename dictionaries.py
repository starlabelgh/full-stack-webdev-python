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