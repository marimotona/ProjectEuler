with open('../Data/euler_008.txt', 'r') as f:
    data = f.read().replace('\n', '')

max_prduct = 0

# for i in range(len(data) - 12):
#     digits = [int(d) for d in data[i:i+13]]
#     product = 1
#     for d in digits:
#         product *= d
#     if product > max_prduct:
#         max_prduct = product

for i in range(len(data) - 12):
    product = 1
    for d in data[i:i+13]:
        product *= int(d)
    max_prduct = max(max_prduct, product)

print(max_prduct)