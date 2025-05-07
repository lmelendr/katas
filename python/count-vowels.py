cadena = 'murcielago'

vowels = ['a','e','i','o','u']

count = 0

for c in cadena:
    for v in vowels:
        if c == v :
            count+=1

print(count)
