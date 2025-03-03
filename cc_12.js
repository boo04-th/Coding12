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
