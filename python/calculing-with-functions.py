# This time we want to write calculations using functions and get the results. Let's have a look at some examples:

# seven(times(five())); // must return 35
# four(plus(nine())); // must return 13
# eight(minus(three())); // must return 5
# six(dividedBy(two())); // must return 3
# Requirements:

# There must be a function for each number from 0 ("zero") to 9 ("nine")
# There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
# Each calculation consist of exactly one operation and two numbers
# The most outer function represents the left operand, the most inner function represents the right operand
# Division should be integer division. For example, this should return 2, not 2.666666...:
# eight(dividedBy(three()));


def zero(param=""): #your code here
    return operations(0,param) if param else 0

def one(param=""): #your code here
    return operations(1,param) if param else 1

def two(param=""): #your code here
    return operations(2,param) if param else 2

def three(param=""):  #your code here
    return operations(3,param) if param else 3

def four(param=""):  #your code here
    return operations(4,param) if param else 4

def five(param=""): #your code here
    return operations(5,param) if param else 5

def six(param=""):  #your code here
    return operations(6,param) if param else 6

def seven(param=""):
    return operations(7,param) if param else 7
    
def eight(param=""):  #your code here
    return operations(8,param) if param else 8

def nine(param=""):  #your code here
    return operations(9,param) if param else 9

def plus(p):
    return '+'+ str(p)
def minus(p):
    return '-'+ str(p)
def times(p):
    return '*'+ str(p)
def divided_by(p):
    return '/'+ str(p)

def operations(p,param):
    resultado = {
        '+' : p+int(param[1]),
        '-' : p-int(param[1]),
        '*' : p*int(param[1]),
        '/' : p//int(param[1]) if param[1]!='0'  else 1
                 
        }

    return resultado.get(param[0],'error')