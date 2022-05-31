INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('HR'),
    ('Audit');

INSERT INTO roles (title, salary, departments_id)
VALUES
    ('Manager', 4000.0, 1),
    ('Supervisor', 3000.0, 1),
    ('HR specialist', 1000.0, 2),
    ('Audit manager', 2000.0, 3),
    ('Audit team', 1000.0, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Asap', 'Rocky', 1, NULL),
    ('John', 'Legend', 3, NULL),
    ('Kendrick', 'Lamar', 2, 1),
    ('Jermain', 'Cole', 3, 3),
    ('Snoop', 'Dogg', 4, NULL),
    ('Dr', 'Dre', 4, NULL);
