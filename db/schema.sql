DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    dep_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL NOT NULL,
    department_id INTEGER,
        CONSTRAINT fk_department
        FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    emp_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    emp_role INTEGER,
    manager_id INTEGER,
        CONSTRAINT fk_role
        FOREIGN KEY (emp_role)
        REFERENCES  roles(id)
        ON DELETE SET NULL
);