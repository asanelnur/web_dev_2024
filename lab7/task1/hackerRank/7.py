def swap_case(s):
    ns = ''
    for i in s:
        if i.islower():
            ns += i.upper()
        else:
            ns += i.lower()
    return ns

s = input()
result = swap_case(s)
print(result)