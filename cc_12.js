// Task 1: Business Dashboard – DOM Element Selection and Creation

document.addEventListener("DOMContentLoaded", function(){ // encapsulates most of code with an event listener
    
    // creates the dashboard selector by elements
    const dashboard = document.getElementById("dashboard");
    const dashboard2 = document.querySelector("#dashboard");

    // appends the metric card
    dashboard.appendChild(createMetricCard("revenueCard", "Revenue", 120));

    function createMetricCard(id, title, amount) { // creates function
        const metricDiv = document.createElement("div");
        
        // sets the different attributes
        metricDiv.setAttribute("id", id);
        metricDiv.setAttribute("class", "metric-card");

        const heading = document.createElement("h3");

        // makes the heading text "title"
        heading.textContent = title;

        const paragraph = document.createElement("p");

        // makes text the money amount
        paragraph.textContent = `$${amount}`;

        metricDiv.appendChild(heading);
        metricDiv.appendChild(paragraph);

        return metricDiv;
    };

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
    // creates the metric cards 
    dashboard2.appendChild(createMetricCard("profitCard", "Profit", 80));
    dashboard.appendChild(createMetricCard("expensesCard", "Expenses", 50));

    const metricCards = document.querySelectorAll(".metric-card");
    const metricCardsArray = Array.from(metricCards); // makes metricCards an array

    metricCardsArray.forEach((card) => { // goes through the array for each item
        const myHeading = card.querySelector("h3");

        myHeading.textContent += " - Updated"; // updates the revenue

        card.style.backgroundColor = "#fdebd0";
    });


    // Task 4: Business Customer Section – Handling Event Bubbling

    const customerSectionDiv = document.getElementById("customerSection");

    function addCustomerCard(name) { // creates a function to add a customer card
        const customerDiv = document.createElement("div");

        customerDiv.setAttribute("class", "customer-card");

        customerDiv.textContent = name;

        customerDiv.addEventListener("click", (event) => { // listens for an event
            console.log("Customer Card Clicked"); // logs the sentence in the console when event is heard
            event.stopPropagation;
        });

        customerSectionDiv.appendChild(customerDiv);
    };

    customerSectionDiv.addEventListener("click", () => { // listen for an event "click"
        console.log("Customer Section Clicked"); // when hears event logs message in the console
    });

    // creates the customer card
    addCustomerCard("First Customer");
    addCustomerCard("Second Customer");
    
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items

function addItemToInventory(product) { // creates function that will add inventory items
    const inventoryList = document.getElementById("inventoryList");
    const newListItem = document.createElement("li");

    // sets attributes for list items
    newListItem.setAttribute("class", "product-item");
    newListItem.setAttribute("data-product", product);
    newListItem.textContent = product;

    newListItem.addEventListener("click", function() { // listens for a click event
        inventoryList.removeChild(product); // removes item in inventory list

        console.log(`Removed Item: ${product}`); // logs the removed items in the console
    });

    inventoryList.appendChild(product); // appends the inventory list using the product
};
