select title, date_format(release_date, '%d/%m/%y') as 'fecha de estreno'
from movies
where length(title) > 10