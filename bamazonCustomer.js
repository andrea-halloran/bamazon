var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "test",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, results, ) {
        if (err) throw err;
        console.log(results);

        inquirer
            .prompt([{
                    name: "product",
                    type: "input",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.lenght; i++) {
                            choiceArray.push(results[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: "Which product would you like to buy? Please provide the item_id."

                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
            .then(function (input) {

                let product = input.product;
                let quantity = input.quantity;

                console.log("You have selected to buy item_id: " + product + "." + '\n Please confirm that you want to purchase ' + quantity + ".");
                inquirer.prompt([{
                        name: "prompt",
                        type: "confirm",
                        message: "Confirm purchase?"
                    }])
                    .then(function (update) {
                        let price = connection.query('SELECT price FROM products WHERE item_id =' + product);
                        let dbQuantity = connection.query('SELECT stock_quantity FROM products WHERE item_id = ' + product);

                        if (dbQuantity > quantity) {
                            console.log("We are proceding with your purchase.")
                            var update = 'UPDATE products SET stock_quantity = ' + (dbQuantity - quantity) + 'WHERE item_id = ' + product;
                            connection.query(update, function (err) {
                                if (err) throw err;
                                console.log('Your order has been placed. Your total is $' + price * quantity);
                            })
                        } else {
                            console.log("I'm sorry, we do not have enough product in stock.");
                        }
                    })

            })
    })
}