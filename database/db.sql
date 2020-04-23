CREATE DATABASE practica01;
USE practica01;
CREATE TABLE empleado(
    id INT(11) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);
CREATE TABLE articulos(
    id INT(11) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    precio FLOAT(4,2) NOT NULL,
    stock INT(10) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_empleado FOREIGN KEY (empleado_id) REFERENCES empleado(id)
);