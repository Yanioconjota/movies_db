select title, rating,
case
	when rating < 5 then 'Mala'
    when rating < 7 then 'Buena'
    else 'Muy buena'
end as comentario
from movies