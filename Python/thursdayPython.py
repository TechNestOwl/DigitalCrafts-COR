# lists
# --- How to create

groceries = ["milk","eggs","bread","salmon"]

print (groceries[-2])
print (groceries[-3])

# Adding to a list
groceries.append("bacon")
print(groceries)

# How to remove items
popped_item = groceries.pop(3)
print(groceries)
print(popped_item)
# Remvoe bread
del groceries[2]
print(groceries)
