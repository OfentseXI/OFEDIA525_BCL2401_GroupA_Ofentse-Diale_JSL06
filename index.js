// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta",],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Chicken Pasta", "Ribs and Wings"],
    Desserts: ["Tiramisu", "Cheesecake", "Malva Pudding", "Chocolate Lava Cake"],
    Extras: ["Fries", "Sweet Potato Wedges", "Rice"]
};

// Function to display menu items by category
// Get the menu container element from the HTML
// Loop through each category and its items in the menu object
// Create an element to represent the category
// Set the text content of the category element to the category name
// Append the category element to the menu container
// Create an element to represent a list of items
// Append a list of items element to the menu container
// Loop through the items in the category and create list items
// Create a list item element
// Set the text content of the list item element to the item name
// Attach a click event listener to the list item to add it to the order
// Append the list item to the list of items

function displayMenuItems(menu) {
    let menuContainer = document.getElementById("menu");
    for (let category in menu) {
        if (menu.hasOwnProperty(category)) {
            let categoryElement = document.createElement("h1");
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);
            let itemList = document.createElement("ul");
            menuContainer.appendChild(itemList);
        
        
            menu[category].forEach(function(item) {
                var listItem = document.createElement("li");
                listItem.textContent = item;
                listItem.addEventListener("click", function() {addToOrder(item);});
                itemList.appendChild(listItem);
            });
        }
    }         
}

// Callback function for adding an item to the order
// Get the order items list and the order total element from the HTML
// Create a list item for the order
// Set the text content of the list item to the item name
// Append the list item to the order items list
// Calculate and update the total price
// Update the text content of the order total element with the new total

function addToOrder(itemName) {
    let orderList = document.getElementById("order-items");
    let orderTotal = document.getElementById("order-total");
    const listItem = document.createElement("li");
    listItem.textContent = itemName;
    orderList.appendChild(listItem);
    var totalPrice = parseFloat(orderTotal.textContent) || 0;
    totalPrice += 60;
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
// Call the function to display menu items

function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
