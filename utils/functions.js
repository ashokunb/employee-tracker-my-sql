const db = require("../server");
cTable = require("console.table");
inquirer = require("inquirer");

//functions to run the given command
function viewAllDepartments() {
  //sql = `SELECT * FROM departments`;
  db.query(`SELECT * FROM departments`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
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
    res.json({
      message: 'success',
      data: rows
    });
  });
};
function viewAllEmployees() {
  const sql1 = `SELECT * FROM employees`;
  db.query(sql1, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
};
function addDepartments() {
  
}
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

