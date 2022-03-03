SELECT * FROM sakila.film;

SELECT title, IF (RENTAL_RATE > 0.99, 'CARO', 'BARATO') FROM sakila.film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MEDIO'
        WHEN rental_rate > 2.99 THEN 'CARO'
	ELSE rental_rate = 'não classificado'
END AS 'VALOR'
FROM sakila.film;

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'JA ASSISTIR ESSE FILME', 'NÃO CONHEÇO O FILME') AS 'CONHEÇO O FILME ?' FROM sakila.film ;

SELECT title, rating, 
	CASE
		WHEN rating = 'G' THEN "Livre para todos"
        WHEN rating = 'PG' THEN "Não recomendado para menores de 10 anos"
        WHEN rating = 'PG-13' THEN "Não recomendado para menores de 13 anos"
        WHEN rating = 'R' THEN "Livre para todos"
	ELSE "Proibido para menores de idade"
END AS 'público-alvo'
FROM sakila.film;
        
        
        
        
        
        

