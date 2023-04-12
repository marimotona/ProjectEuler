# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def largest_prime(n):
    factor = 2
    while factor * factor <= n:
        if n % factor:
            factor += 1
        else:
            n //= factor
    return n

number = 600851475143
result = largest_prime(number)
print(result)