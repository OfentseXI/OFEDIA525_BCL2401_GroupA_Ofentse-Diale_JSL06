// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta",],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Chicken Pasta", "Ribs and Wings"],
    Desserts: ["Tiramisu", "Cheesecake", "Malva Pudding", "Chocolate Lava Cake"],
    Extras: ["Fries", "Sweet Potato Wedges", "Rice"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
    for (let category in menu) {
        if (menu.hasOwnProperty(category)) {
        // Create an element to represent the category
        let categoryElement = document.createElement("h1");
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        // Create an element to represent a list of items
        let itemList = document.createElement("ul");
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList);
        // Loop through the items in the category and create list items
        menu[category].forEach(function(item) {
            // Create a list item element
            var listItem = document.createElement("li");
            // Set the text content of the list item element to the item name
            listItem.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", function() {addToOrder(item);});
            // Append the list item to the list of items
            itemList.appendChild(listItem);});
        }
    }
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderList = document.getElementById("order-items");
    let orderTotal = document.getElementById("order-total");
    // Create a list item for the order
    const listItem = document.createElement("li");
    // Set the text content of the list item to the item name
    listItem.textContent = itemName;
    // Append the list item to the order items list
    orderList.appendChild(listItem);
    // Calculate and update the total price
    var totalPrice = parseFloat(orderTotal.textContent) || 0;
    totalPrice += 60;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
