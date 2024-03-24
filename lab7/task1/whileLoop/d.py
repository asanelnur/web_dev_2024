n = int(input())
i = 1
ok = False

while n<=i:
    if n==i:
        ok = True
        print("YES")
        break
    i*=2

if not ok:
    print("NO")