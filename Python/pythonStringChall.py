class Restaurant:
    def __init__(self, customer = {}, items = ["Grits", "Eggs", "Bacon"], totalprice = 0, fulfilled = False):
        self.customer = customer
        self.items = items
        self.totalprice = totalprice
        self.fulfilled = fulfilled
    def add_customer(self, name, contact, wallet = 100):
        self.customer["Name"] = name
        self.customer["Contact"] = contact
        self.customer["Wallet"] = wallet
    def add_item(self, items):
        self.items.append(items)
    def final_price(self):
        index = 0
        while index < len(self.items):
            self.totalprice += self.items[index]["Price"]
            index += 1
            print(self.totalprice)
new_order = Restaurant(True)
print("\n Grits $10.99 \n Eggs $9.99 \n Bacon $10.96 \n")
wallet = 100
Grits= {
    "Price": 10.99
}
Eggs= {
    "Price": 9.99
}
Bacon= {
    "Price": 10.96
}
new_order.add_customer(name, contact)
user_choice = input("What would you like to eat?")
if user_choice == Grits:
        print("\n 10.99 \n")
        print("Your remaining balance is", round(wallet - Grits["Price"], 2))
        wallet -= Grits["Price"]
elif user_choice == Eggs:
        print("9.99")
        print("Your remaining balance is", round (wallet - Eggs["Price"], 2))
        wallet -= Eggs["Price"]
elif user_choice== Bacon:
        print("10.96")
        print("Your remaining balance is", round(wallet - Bacon["Price"], 2))
        wallet -= Bacon["Price"]
print(new_order.customer)
print(new_order.items)
new_order.final_price()