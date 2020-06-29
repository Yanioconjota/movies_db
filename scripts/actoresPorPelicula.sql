select movies.id, title,first_name, last_name, actor_movie.id, actors.id
from movies, actor_movie, actors
where actors.id = actor_id
and movies.id = movie_id