# Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

# All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

# Examples
# * With input "10.0.0.0", "10.0.0.50"  => return   50 
# * With input "10.0.0.0", "10.0.1.0"   => return  256 
# * With input "20.0.0.10", "20.0.1.0"  => return  246



######sin usar regex
# arr = []
# str = "10.0.1.0"
# e=""

# for i in str :
#     if i=='.':
#         arr.append(int(e))
#         e=""
#         continue
#     e=e+i
#arr.append(int(e))

import re

def ips_between(start, end):
    # TODO   
    
    ip1 = re.findall(r'\d+',start)
    ip2 = re.findall(r'\d+',end)
    
    return sum([int(x)*(256**(len(ip2)-1-i)) for (i,x) in enumerate(ip2)]) - sum([int(x)*(256**(len(ip1)-1-i)) for (i,x) in enumerate(ip1)])

print(ips_between("20.0.0.10", "20.0.1.0"))

#hice un cambio
