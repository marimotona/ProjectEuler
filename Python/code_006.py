def square():
    sum = 0
    for i in range(1, 101):
        sum += i * i
    return sum

def firstSum():
    numSum = 0
    result = 0
    for i in range(1, 101):
        numSum += i
        result = numSum * numSum
    return result

def resultPro():
    return firstSum() - square()

result = resultPro()
print(result)
