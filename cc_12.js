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

    