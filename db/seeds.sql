INSERT INTO departments (dep_name)
VALUES
    ("Sales"),
    ("HR"),
    ("Construction"),
    ("Audit");

INSERT INTO roles (role_title, role_salary, departmnet_id)
VALUES
    ("Sales manager", 4000, 1)
    ("Supervisor", 3000, 1),
    ("HR specialist", 1000, 3)
    ("Audit manager", 2000, 2)
    ("Audit team", 1000, 4)

INSERT INTO employees (first_name, last_name, emp_role, manager_id)
    ("Asap", "Rocky", 1, NULL),
    ("John", "Legend", 2, NULL),
    ("Kendrick", "Lamar", 3, NULL),
    ("Jermain", "Cole", 4, NULL),
    ("Snoop", "Dogg", 4, NULL),
    ("Dr", "Dre", 4, NULL),
  
    