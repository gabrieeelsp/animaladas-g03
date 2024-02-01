## Obtener Lista de Donaciones

### Descripción

Este endpoint devuelve una lista de donaciones disponibles.

### Endpoint

### Filtros

-   `userId` : Filtra donaciones por id de usuario.
-   `animalId`: Filtra donaciones por id de animal, un animalId = 0 significa que trera todas las donaciones que no esten asociadas a un animal
-

### Paginación

-   `page` : Número de página.
-   `limit` : Número de elementos por página.

### Ordenamiento

-   `orderby` : [ created ]
-   `orderdir` : [ asc, desc] // opcional

### Ejemplo de Solicitud

localhost:3001/donations?userId=1&animalId=5
