SELECT * FROM sakila.film;
SELECT CONCAT(title, ' - ', release_year, ' - ', rating) FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT * FROM sakila.actor;
SELECT DISTINCT(last_name) FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language;
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT * FROM sakila.film;
SELECT * FROM sakila.film ORDER BY rental_duration LIMIT 20;