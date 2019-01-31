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

function runSearch() {
    inquirer
        .prompt({
            name: "",
            type: "",
            message: "",
            choices: [
                
            ]
        })
        .then(function (answer) {
            switch (answer) {
                
            }
        });
}