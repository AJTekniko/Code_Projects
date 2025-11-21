def lcm(x, y):
    if(x > y):
        mayor = x
    else:
        mayor = y

    while(True):
        if(mayor % x == 0) and (mayor % y == 0):
            mcm = mayor
            break
        mayor += 1
    return mcm

print(lcm(4, 6))
