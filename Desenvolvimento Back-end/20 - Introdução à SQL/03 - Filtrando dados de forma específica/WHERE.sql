SELECT * FROM sakila.customer;
SELECT * FROM sakila.customer
WHERE active  = FALSE AND store_id = 2 AND first_name <> "KENNETH" ORDER BY first_name;

SELECT * FROM sakila.film;
SELECT CONCAT(title, ' - ', description, ' - ', release_year, ' - ', replacement_cost ) FROM sakila.film
WHERE replacement_cost > 18 AND rating <> 'NC-17' ORDER BY replacement_cost DESC LIMIT 100;

SELECT COUNT(active) FROM sakila.customer
WHERE store_id = 1;

SELECT * FROM sakila.customer
WHERE active = FALSE AND store_id = 1;

SELECT * FROM sakila.film;
SELECT * FROM sakila.film
WHERE rating = 'NC-17' ORDER BY rental_rate LIMIT 50;