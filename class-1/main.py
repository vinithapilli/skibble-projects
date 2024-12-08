a=1
b=2
a=b
print(a)
print(b)


a = "1" + "2"
print(a) #known as string concatenation


a = "python"
a = ("*"*3)+ a + ("*"*3)
print(a) #string repitation


name = "vinitha"
length = len(name)
print(length) #string repitation

print("vinni")

Age = 34
AGE = 40
aGe = 80
print(Age)
print(AGE)
print(aGe)#case sensitive

#data types --> int, boolean, tuple,, mapping, dict,
name = "vinitha " "Pilli"
print(name)

x = ["apple", "banana", "cherry"]#list -->mutable-->can change
print(x)

x = ("apple","banana","cherry", "dry fruit","egg","fish")#tuple -->immutable-->cannot change
print(x)

y = {"ice cream":"amul","flavour":"vanilla"}#dic
print(y["ice cream"])#mapping -->dic

b = 20
c = 30
if b == c:
    print("true")
else:
    print("false")

a = 330
b = 330
if a > b:
    print("b is greater")
elif a==b:
    print("both are equal")#elif

a = 10
b = 20
if a < b: print("a greater than b")

b = 200
c = 300
if b>c and c<a:
    print("both are true")

b = 30
c = 40
if b > c or b < c:
    print("atleast one statement true")

c = 50
d = 60
if not c > d:
    print("not greater than")

x = 41
if x > 10:#nested if
    print("above ten")
    if x > 20:
        print("above 20")
    else:
        print("below 20")

i = 1 
while i < 6:
    print(i)
    i += 1

i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1

fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
    if x == "banana":
       break

for x in "banana":
    print(x)

fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)

for x in range(6):
    print(x)

for x in range(2, 30, 3):
    print(x)

for x in range(6):
    print(x)
else:
    print("finished")

adj = ["red","big","tasty"]
fruits = ["apple","banana","mango"]
for x in adj:
 for y in fruits:
    print(x, y)

L = [1,2,3,4]
for z in L:
 if z == 3:
    print("1")
else:
    print("0")