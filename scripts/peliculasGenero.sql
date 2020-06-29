select title, coalesce(name, "No tiene género") as 'género' from movies
left join genres on genre_id = genres.id