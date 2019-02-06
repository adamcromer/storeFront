//Must require certain NPM packages to run
require("dotenv").config();
var password = require("./pass.js");
var mysql = require("mysql");
var inquirer = require("inquirer");

//Divider to diplayer cleaner code
var divider = ("\n\n------------------------\n");
// var newArr = [];

//Pass read using dotenv
var pass = password.pass.id;

//Connection to local mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("connected as id " + connection.threadId + "\n");  
    // console.log(newArr);

    startFunc(readInv);
});

function startFunc(arr) {

    inquirer
        .prompt(
            {
                name: "action",
                type: "list",
                message: "Welcome to the Command Line Book store. \nHere is our current inventory. \nWhat book would you like to buy?",
                choices: arr
            }
        )
        .then(function (answer) {
            console.log(answer.action);
        });
}

function qtyFunc() {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "How many of product would you like to buy?"
        })
        .then(function (answer) {

        });
}

function readInv() {
    connection.query("SELECT name, author, department, price, quantity FROM products ORDER BY department, author, name", function (err, res) {
        if (err) throw err;

        var newArr = [];

        // Log all results of the SELECT statement
        for (var i = 0; i < res.length; i++) {
            newArr.push(res[i].name + " | Author: " + res[i].author + " | Genre: " + res[i].department + " | Price: " + res[i].price + " | Quantity: " + res[i].quantity);
        }

        return newArr;
        
        connection.end();
    });
}
