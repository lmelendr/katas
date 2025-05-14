

def move_zeros(lst):
    
    lst1 = list(filter(lambda x : x != 0  ,lst))
    
    lst2 = list(filter(lambda x : x == 0  ,lst))
    
    lst1.extend(lst2)
    
    return lst1

print(move_zeros([1, 0, 1, 2, 0, 1, 3]))