# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

import math

def lcm(a, b):
    return abs(a * b) // math.gcd(a, b)

def find_lcm_of_range(n):
    result = 1
    for i in range(1, n + 1):
        result = lcm(result, i)
    return result

smallest_number = find_lcm_of_range(20)
print(smallest_number)

    