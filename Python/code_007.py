def check_prime(num):
    i = 2
    while i*i <= num:
        if num % i == 0:
            return False
        i += 1
    return True

# code_01
# def find_prime(num):
#     count = 0
#     i = 2
#     while count <= num:
#         if check_prime(i):
#             count += 1
#         if check_prime(i) and count == num:
#             print(i)
#         i += 1

# code_02
def find_prime(num):
    count = 0
    i = 2
    while count <= num:
        if check_prime(i):
            count += 1
            if count == num:
                print(i)
        if i > 2:
            i += 2
        else:
            i += 1

import time

start_time = time.time()
find_prime(10001)
end_time = time.time()
        
print("Execution Time: ", end_time - start_time, "seconds")