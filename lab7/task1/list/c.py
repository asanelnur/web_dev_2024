n = int(input())
l =[int(i) for i in input().split()]
cnt = 0

for i in range(n):
    if l[i]>0:
        cnt+=1

print(cnt)