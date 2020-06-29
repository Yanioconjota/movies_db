-- Desafio 1
-- Ejercicio 1
/* select * from actors
order by id desc
limit 1 */
-- Respuesta: Gunn

-- Ejercicio 2
/* select id, title, awards from movies
limit 1
offset 4 */
-- Respuesta: Parque

-- Ejercicio 3
/* select id, title, length from movies
where title like 'Tita%' */
-- Respuesta: 320

-- Ejercicio 4
/* select title, genre_id from series
where id = 4 */
-- Respuesta: 4

-- Ejercicio 5
/* select title, season_id from episodes
where episodes.number = 2 */
-- Respuesta: 46

-- Desafio 2
-- Ejercicio 1
/* select title, release_date
from movies
where release_date between '1999-10-01 00:00:00' and '2004-12-01 23:59:59' */
-- Respuesta: El rey león

-- Ejercicio 2
/* select title
from movies
where title like '%a' */
-- Respuesta: Hotel

-- Ejercicio 3
/* select concat(first_name, ' ', last_name) as 'nombre completo'
from actors
where first_name like 'Jim%' */
-- Respuesta: 3

-- Ejercicio 4
/* select title, sum(awards)
from movies
where title like 'La Guerra%' */
-- Respuesta: 13

-- Ejercicio 5
/* select concat(first_name, ' ', last_name) as 'nombre completo', title
from actors
inner join movies on favorite_movie_id = movies.id
where first_name like 'Leo%' */
-- Respuesta: La Guerra de las galaxias: Episodio VII

-- Desafio 3
-- Ejercicio 1
/* select actors.id, concat(first_name, ' ', last_name) as 'nombre completo', title
from actors
inner join movies on favorite_movie_id = movies.id
where actors.rating = 2.3
order by actors.id */
-- Respuesta: Buscando a Nemo

-- Ejercicio 2
/* select *
from series
inner join genres on genre_id = genres.id
where title like '% % %' */
-- Respuesta: Game of Thrones

-- Ejercicio 3
/* select *
from movies
inner join genres on genre_id = genres.id
where name like 'Animación' */
-- Respuesta: Intensamente

-- Ejercicio 4
/* select actors.id as 'actor id', concat(first_name, ' ', last_name) as actor, movies.id as 'movie id', title
from movies
inner join actor_movie on movies.id = movie_id
inner join actors on actors.id = actor_id
where title like "Parque Jur%" */
-- Respuesta: Dern

-- Ejercicio 5
/* select *
from movies
inner join genres on genre_id = genres.id
where ranking between 1 and 4
order by rating asc */
-- Respuesta: Mi... Mi pobre angelito