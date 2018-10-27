1. Introduction

    Bamazon is an Amazon like storefront CLI app. 

    Upon opening, the app will display all of the items that are for sale from the store. 

    The user can select an item to purchase by selecting the item_id. After making a selection, the user will be prompted to select how many of the item they would like to purchase. 

    If the quantity is less than what is available in the database, the app will print: "We are proceding with your purchase." This in turn, will update the database by subtracting the quantity selected from the quantity in the database. The app will also respond with the order confirmation and price for the total order.

    If the quantity is more than what is available in the database, the user will be told: "I'm sorry, we do not have enough product in stock."

2. Technology Used
    * MySQL and Inquirer npm packages
    * MySQL 
    * JavaScript
    * node.js 

3. Challenges 
    ! After the app evaluates if an item is available to purchase, I got the following error: 

    /Users/andreahalloran/Bootcamp/bamazon/node_modules/mysql/lib/protocol/Parser.js:80
        throw err; // Rethrow non-MySQL errors
        ^

    Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'item_id = 3' at line 1

    I believe that the SQL syntax that I have is correct, but will need to research further to see why the request is not going through. This error is not allowing the user to continue to the order confirmation and price display. 
