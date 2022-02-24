-- Exercício 1: Insira um novo funcionário na tabela sakila.staff .

SELECT * FROM sakila.staff;
INSERT INTO sakila.staff  (first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES ('esau', 'matias', 5, 'esaumatias@hotmail.com', 1, 1, 'esauMatias', '123456578', now());

-- Exercício 2: Feito o exercício anterior, vamos agora para o nível 2. Insira 2 funcionários novos em apenas uma query .

INSERT INTO sakila.staff  (first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES ('manoel', 'maate', 6, 'manoe@hotmail.com', 1, 1, 'manoe', '123456578', now()),
('inglisa', 'rayane', 7, 'esaumatias@hotmail.com', 1, 1, 'inglisa', '123456578', now());

-- Exercício 3: Selecione os 5 primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .

INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
    
-- Exercício 4: Cadastre 3 categorias de uma vez só na tabela sakila.category .    
    
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');
    
-- Exercício 5: Cadastre 1 nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
