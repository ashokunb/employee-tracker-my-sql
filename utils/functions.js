const db = require("../server");
cTable = require("console.table");
inquirer = require("inquirer");

//functions to run the given command
function viewAllDepartments() {
  //sql = `SELECT * FROM departments`;
  db.query(`SELECT * FROM departments`, (err, rows) => { console.table(rows) });
}
function viewAllRoles() {
  const sql = `SELECT roles.*, departments.name AS departments_Name FROM roles LEFT JOIN departments ON roles.departments_id=departments.id`;
  db.query(sql, (err, rows) => { console.table(rows) });
}
function viewAllEmployees() { }
function addDepartments() { console.log('hello') }
function addRole() { console.log('hello') }
function addEmployee() { console.log('hello') }
function updEmployee() { console.log('hello') }
function exit() { console.log('hello') }

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartments,
  addRole,
  addEmployee,
  updEmployee,
  exit,
};

