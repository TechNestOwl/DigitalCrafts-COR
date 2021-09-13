    # Todo List
    # Display the 3rd and 5th todo's
    # Display the second to last todo, accessing it from the end
    # add two todo's
    # remove the last todo item 
    # display remaining todo's 
    # change second toDo: "walk doge"

toDo = [
        "dishes",
        "laundry",
        "wash car",
        "meal prep",
        "eat",
        "code",
        "sleep",
        "repeat",
        ]

# Print 4th and 5th items
print(toDo[2])
print(toDo[4])

# Print second to last item from end
print("Second to last item from end: ", toDo[-2])

# add two toDo's
toDo.append("leg-workout")
toDo.append("buy more protien")
print("Two items added: ", toDo)

#remove last two items
del toDo[-1]
del toDo[-1]

# Edit second item to "walk doge"
toDo[1]="walk doge"
print("Final list: ", toDo)





