def print_full_name(first, last):
    # Write your code here
    s = "Hello {} {}! You just delved into python."
    print(s.format(first, last))


first_name = input()
last_name = input()
print_full_name(first_name, last_name)