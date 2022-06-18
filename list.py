myList = [1,2,3,4,5,6,7,8,9,10]
#myList = ['sbdsbdms', 1,2,3,4,5,2.56, [1,2,3]]
print(myList[-1])
myList[-1] = 'New Item Added'
print(myList)

#append list
myList.append('Add Moses')
print(myList)
newList = ['x','y','z']

#extend list
myList.extend(newList)
print(myList)

item = myList.pop(-1)
print(myList)
print(item)

matrix = [[1,2,3], [4,5,6], [7,8,9]]
#list comprehension
first_col = [row[0] for row in matrix]

print(first_col)
