## Obtener Lista de Reviews

### Descripción

Este endpoint devuelve una lista de reviews disponibles.

### Endpoint

### Filtros

-   `userId` : Filtra animales por id de usuario.
-   `isReviewed`: [ pendiente, aceptado, rechazado ]

### Paginación

-   `page` : Número de página.
-   `limit` : Número de elementos por página.

### Ordenamiento

-   `orderby` : [ created ]
-   `orderdir` : [ asc, desc] // opcional

### Ejemplo de Solicitud

localhost:3001/review/allReviews?userId=2&limit=2&page=1&isReviewed=pendiente
