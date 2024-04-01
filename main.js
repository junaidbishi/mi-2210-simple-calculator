#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operation to perform action",
        type: "list",
        name: "operator",
        choices: ["subtraction", "addition", "multiplication", "division"],
    },
]);
//conditional operator
if (answer.operator === "addition") {
    console.log(chalk.gray(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.gray(answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.gray(answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "division") {
    console.log(chalk.gray(answer.firstnumber / answer.secondnumber));
}
else {
    console.log(chalk.red("please select valid number"));
}
