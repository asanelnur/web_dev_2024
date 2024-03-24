n = int(input())
l =[int(i) for i in input().split()]

for i in range(n):
    if l[i]%2==0:
        print(l[i],end=' ')