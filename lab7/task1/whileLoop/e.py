n = int(input())
i = 2
j = 1

if n==1:
    print(0)
else:    
    while n>i:
        i*=2
        j+=1

    print(j)