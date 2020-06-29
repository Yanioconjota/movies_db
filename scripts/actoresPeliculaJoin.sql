select actors.id as 'actor id', concat(first_name, ' ', last_name) as actor, movies.id as 'movie id', title
from movies
inner join actor_movie on movies.id = movie_id
inner join actors on actors.id = actor_id
where title like "Harry%"