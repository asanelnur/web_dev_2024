x,n = input().split()
x = int(x)
n = int(n)

def xor(x,n):
    if x*n == 1:
        return 0
    elif x+n==0:
        return 0
    else:
        return 1

print(xor(x,n))