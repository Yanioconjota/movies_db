/* select max(rating), title, count(*)
from movies
where title like "la guerra%" */

/* select min(rating), title, count(*)
from movies
where title like "Harry%" */

-- count ignora los valores null

/* select sum(length)
from movies
where title like "la guerra%" */

/* select avg(length)
from movies
where title like "Harry%" */

/* select name, count(*), max(rating), avg(length)
from movies
inner join genres on genre_id = genres.id
group by name */

select name, count(*), max(rating), avg(length)
from movies
inner join genres on genre_id = genres.id
group by name
having count(*) >= 3