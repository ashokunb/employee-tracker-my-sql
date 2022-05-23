INSERT INTO departments (dep_name)
VALUES
    ("Sales"),
    ("HR"),
    ("Construction"),
    ("Audit");

INSERT INTO role (role_title, role_salary, department_id)
VALUES
    ("Sales manager", 4000, 1),
    ("Supervisor", 3000, 1),
    ("HR specialist", 1000, 3),
    ("Audit manager", 2000, 2),
    ("Audit team", 1000, 4);

INSERT INTO employee (first_name, last_name, emp_role, manager_id)
VALUES
    ('Asap', 'Rocky', 1, NULL),
    ('John', 'Legend', 2, NULL),
    ('Kendrick', 'Lamar', 3, NULL),
    ('Jermain', 'Cole', 4, NULL),
    ('Snoop', 'Dogg', 4, NULL),
    ('Dr', 'Dre', 4, NULL);
  
    