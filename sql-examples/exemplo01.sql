DROP DATABASE cadastroClientes11;
CREATE DATABASE cadastroClientes11;
USE cadastroClientes11;

CREATE TABLE clientes(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE pedidos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    codPedido INT,
    produto VARCHAR(200),
    valor DOUBLE,
    FOREIGN KEY (idCliente) REFERENCES clientes(id)
);

INSERT INTO clientes(nome) VALUE
("jureia"),
("triche"),
("junkes baby"),
("farbe"),
("meia loka")
;

INSERT INTO pedidos(produto, codPedido, valor, idCliente) VALUES 
("fabrica de software", 30, 30000, 1),
("fwsales", 890, 1000000000000, 4),
("app", 40, 20000, 1),
("e-commerce", 50, 25000, 1),
("fabrica de software", 31, 40000, 2),
("app", 41, 25000, 2),
("e-commerce", 51, 45000, 2),
("fabrica de software", 32, 45000, 3),
("app", 42, 32000, 3),
("e-commerce", 52, 28000, 3),
("fabrica de software", 33, 67000, 4),
("app", 43, 38000, 4),
("e-commerce", 53, 18000, 4),
("fabrica de software", 34, 25000, 5),
("app", 44, 42000, 5),
("e-commerce", 54, 22000, 5)
;


SELECT * FROM clientes;
SELECT * FROM pedidos;
SELECT SUM(valor), idCliente
FROM pedidos
GROUP BY idCliente
;

SELECT clientes.nome, GROUP_CONCAT(pedidos.codPedido SEPARATOR ', ') AS pedidos, SUM(valor) AS valorTotal, COUNT(pedidos.codPedido) AS numPedidos FROM clientes
INNER JOIN pedidos ON (pedidos.idCliente = clientes.id)
GROUP BY idCliente
HAVING numPedidos > 3;





