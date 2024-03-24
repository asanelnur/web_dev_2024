a = int(input())

nextNumber = 'The next number for the number {} is {}.'
prevNumber = 'The previous number for the number {} is {}.'
print(nextNumber.format(a, a+1))
print(prevNumber.format( a, a-1))