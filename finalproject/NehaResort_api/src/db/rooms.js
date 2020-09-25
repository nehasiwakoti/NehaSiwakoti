 
 export const FETCH_ROOMS=`
SELECT
r.id,
r.name,
r.type,
r.price,
r.size,
r.capacity,
r.breakfast,
r.pets,
r.featured,
r.description,
r.extras,
 
FROM rooms r

GROUP BY r.id; `;
