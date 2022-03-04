SELECT * FROM sakila.country;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT
    S.first_name, S.last_name, A.address
FROM
    sakila.staff AS S
        INNER JOIN
    sakila.address AS A ON S.address_id = A.address_id;


Copiar
SELECT
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';

SELECT
    c.first_name, 
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN 
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY 
    c.customer_id
ORDER BY 
    first_name DESC, 
    last_name DESC;

SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

SELECT
    A.actor_id, 
    A.first_name, 
    F.film_id, 
    F.title
FROM
    sakila.actor AS A
INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;

