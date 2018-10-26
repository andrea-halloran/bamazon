var mysql = require("mysql"); 
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "test",
    database: "bamazon"
}); 

connection.connect(function(err) {
    if (err) throw err; 
    start(); 
}); 

function start(){
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err; 
        console.log(results);   

        inquirer
            .prompt([
                {
                    name: "choice", 
                    type: "rawlist", 
                    choices: function(){
                        var choiceArray = []; 
                        for (var i =0; i < results.lenght; i ++) {
                            choiceArray.push(results[i].item_id);
                        }
                        return choiceArray; 
                    }, 
                    message: "Which product would you like to buy? Please provide the item_id."
                }
            ])
    })
}