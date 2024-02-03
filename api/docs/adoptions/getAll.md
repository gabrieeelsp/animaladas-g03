## Obtener Lista de Adopciones

### Descripción

Este endpoint devuelve una lista de adopciones.

### Endpoint

### Filtros

-   `userId` : Filtra donaciones por id de usuario.
-   `animalId`: Filtra donaciones por id de animal.
-

### Paginación

-   `page` : Número de página.
-   `limit` : Número de elementos por página.

### Ordenamiento

-   `orderby` : [ created ]
-   `orderdir` : [ asc, desc] // opcional

### Ejemplo de Solicitud

localhost:3001/adoptions?userId=1&animalId=5
