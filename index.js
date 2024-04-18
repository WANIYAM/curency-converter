#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import Table from 'cli-table3';
// functionS for displaying msg 
function welcomeMsg() {
    console.log(chalk.yellow.bold("\t\t\t\t\t***WELCOME TO CURRENCY CONVERTER***\t\t\t\t\t"));
}
;
function exitingMsg() {
    console.log(chalk.yellow.bold("\t\t\t\t\t***THANKS FOR USING CURRENCY CONVERTER***\t\t\t\t\t"));
}
;
// Define exchange rates
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    KWD: 3.30,
    BHD: 2.65,
    OMR: 2.60,
    CAD: 0.80,
};
// Function for user input
async function userInput() {
    const userAns = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.cyan.italic("\nSelect the currency you want to convert\t\t\t\t\n"),
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD", "BHD", "OMR", "CAD"]
        },
        {
            name: "to",
            type: "list",
            message: chalk.cyan.italic("\nSelect the currency you want to convert into\t\t\t\t\n"),
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD", "BHD", "OMR", "CAD"]
        },
        {
            name: 'amount',
            message: chalk.cyan.italic("\nEnter amount you want to convert\t\t\t\t\n"),
            type: 'number'
        }
    ]);
    return userAns;
}
;
// Function to perform conversions
function conversions(userAns) {
    const convertedAmount = (userAns.amount / currency[userAns.from]) * currency[userAns.to];
    return convertedAmount;
}
;
// Function for displaying table
// Function for displaying table
function displayTable(userAns) {
    const convertedAmount = conversions(userAns);
    const table = new Table;
    table.push({ [chalk.bgBlue('Basic Conversion')]: `1 ${userAns.from} = ${currency[userAns.to]} ${userAns.to}` }, { [chalk.bgBlue('Converted Amount')]: `${userAns.amount} ${userAns.from} = ${convertedAmount.toFixed(2)} ${userAns.to}` });
    console.log(table.toString());
}
;
// Main function
async function main() {
    welcomeMsg();
    const userAns = await userInput();
    displayTable(userAns);
    exitingMsg();
}
;
// Call the main function
main();
