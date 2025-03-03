//Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboard1 = document.getElementById("dashboard");//Selecting the dashboard container using both getElementById and querySelector
const dashboard2 = document.querySelector("#dashboard");

const revenueCard = document.createElement("div"); // Creating a new metric card in "div" called Revenue
revenueCard.setAttribute("class", "metric-card"); //Added class attribute for Revenue metric cards
revenueCard.setAttribute("id", "revenueCard"); //Added Id attribute to Revenue metric card
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"; //Populating the Revenue metric card

dashboard1.appendChild(revenueCard); //Appending Revenue card first to prove both selections point  

