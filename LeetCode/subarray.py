def max_subarray(a, k):
    N = len(a)

    s = [0] * (N + 1)
    for i in range(N):
        s[i + 1] = s[i] + a[i]

    max_sum = float('-inf')
    for i in range(N - k + 1):
        max_sum = max(max_sum, s[i + k] - s[i])
    return max_sum

# Test Case
a = [2,5,-4,10,3]
k = 3
print(max_subarray(a, k))

a = [1,-6,-9,10,9]
k = 2
print(max_subarray(a, k))