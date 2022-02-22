SELECT CONCAT(first_name, ' ', last_name) AS 'NOME COMPLETO' FROM sakila.actor;
SELECT CONCAT(title, ': ',release_year) AS 'LANÇAMENTO DO FILME' FROM sakila.film;
SELECT * FROM sakila.film;
SELECT CONCAT(title, ' - ', rating) AS 'CLASSIFICAÇÃO' FROM sakila.film;
SELECT CONCAT(address,' - ', district) AS 'ENDEREÇO' FROM sakila.address;