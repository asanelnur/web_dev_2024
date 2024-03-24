n = int(input())
l =[int(i) for i in input().split()]
ok = False
znak = l[0] > 0

for i in range(1,n):
    if (l[i]>0) == znak:
        ok = True
        print("YES")
        break
    znak = l[i]>0

if not ok:
    print("NO")