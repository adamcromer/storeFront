//Must require certain NPM packages to run
require("dotenv").config();
var password = require("./pass.js");
var mysql = require("mysql");
var inquirer = require("inquirer");

//Divider to diplayer cleaner code
var divider = ("\n\n------------------------\n");

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

function startFunc() {
    inquirer
        .prompt(
            {
                name: "action",
                type: "list",
                message: "Welcome to namehere. What product would you like to buy?",
                choices: [

                ]
            }
        )
        .then(function (answer) {
            
        });
}

function qtyFunc() {
    inquirer
        .prompt({
            name: "quantity",
            type: "number",
            message: "How many of product would you like to buy?",
            choices: [

            ]
        })
}