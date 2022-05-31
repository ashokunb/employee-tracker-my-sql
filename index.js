const inquirer = require("inquirer");
const mysql = require("mysql2");


//call to functions hosted in function.js
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartments,
  addRole,
  addEmployee,
  updEmployee,
  exit,
} = require("./utils/functions");

const questions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "quest",
      message: "What would you like to do?",
      choices: [
          "View all departments?",
          "View all roles at the company?",
          "View all employees?",
          "Add a new department?",
          "Add a new role?",
          "Add a new employee?",
          "Update a previous employee record?",
          "Exit",
      ],
    },
    ]).then((answer) => {//goes into functions database to run selected option
        if (answer.quest === "View all departments?"){
            viewAllDepartments();
        } else if (answer.quest === "View all roles at the company?"){
            viewAllRoles();
        } else if (answer.quest === "View all employees?"){
            viewAllEmployees();
        } else if (answer.quest === "Add a new department?"){
            addDepartments();
        } else if (answer.quest === "Add a new role?"){
            addRole();
        } else if (answer.quest === "Add a new employee?"){
            addEmployee();
        } else if (answer.quest === "Update a previous employee record?"){
            updEmployee();
        } else exit();
    }
)};

//executes questions function
questions()