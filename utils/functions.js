const inquirer = require("inquirer");
const db = require("../server");
cTable = require("console.table");

//functions to run the given command
function viewAllDepartments() {
  //sql = `SELECT * FROM departments`;
  db.query(`SELECT * FROM departments`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(rows)
  });
};

function viewAllRoles() {
  const sql = `SELECT roles.*, 
  departments.name AS departments_Name FROM roles LEFT JOIN departments 
  ON roles.departments_id=departments.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(rows)
  });
};
function viewAllEmployees() {
  const sql1 = `SELECT * FROM employees`;
  db.query(sql1, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(rows)
  });
};

function addDepartments() {}

function addRole() { console.log('to be created') }
function addEmployee() { console.log('to be created') }
function updEmployee() { console.log('to be created') }
function exit() { console.log('Thank you') }

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

