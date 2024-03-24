def split_and_join(line):
    # write your code here
    l = line.split()
    s = l[0]
    for i in range(1,len(l)):
        s += "-"+l[i]
    return s

line = input()
result = split_and_join(line)
print(result)