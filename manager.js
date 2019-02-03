//Must require certain NPM packages to run
require("dotenv").config();
var password = require("./pass.js");
var mysql = require("mysql");
var inquirer = require("inquirer");

//Divider to diplayer cleaner code
var divider = ("\n\n------------------------\n");