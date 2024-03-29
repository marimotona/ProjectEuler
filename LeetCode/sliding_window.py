def max_sliding_window(arr, k):
    max_sum = float('-inf')
    window_sum = 0
    window_start = 0

    for window_end in range(len(arr)):
        window_sum += arr[window_end]

        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]
            window_start += 1
    
    return max_sum

print(max_sliding_window([2,4,5,6,9,1,2,7], 3))