def sleep_in(weekday, vacation):
  if vacation:
    return True
  elif not weekday:
    return True
  else:
    return False
  

def monkey_trouble(a_smile, b_smile):
  return a_smile==b_smile

def sum_double(a, b):
  if a==b:
    return (a+b)*2
  else:
    return a+b

def diff21(n):
  if n>21:
    return abs(21-n)*2
  return abs(21-n)

def parrot_trouble(talking, hour):
  return talking and ( hour<7 or hour>20)

def makes10(a, b):
  return a==10 or b==10 or a+b==10 

def near_hundred(n):
  return abs(n-100)<=10 or abs(n-200)<=10

def pos_neg(a, b, negative):
  if negative:
    return a<0 and b<0
  return a<0 and b>0 or b<0 and a>0

def not_string(str):
  if str.startswith("not"):
    return str
  else:
    return 'not '+ str

def missing_char(str, n):
  return str[:n]+str[n+1:]

def front_back(s):
  l = len(s)
  if l<=1:
    return s
  return s[l-1]+s[1:l-1]+s[0]

def front3(str):
  return str[:3]*3