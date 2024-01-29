## Obtener Lista de Animales

### Descripción

Este endpoint devuelve una lista de animales disponibles.

### Endpoint

### Filtros

-   `name` : Filtra animales por nombre, no es case sensitive.
-   `gender`: [ male, female ]
-   `species` : [ dog, cat ]
-   `size` : [ small, medium, large ]
-   `status` : [ rescued, adoptable, adopted ]
-   `vaccines` : boolean
-   `disability_illness` : boolean
-   `castrated` : bollean
-   `age_min` : Filtra animales por edad, considerando mayores o iguales a.
-   `age_max` : Filtra animales por edad, considerando menores o iguales a.
    ( los filtros `age_min` y `age_min` se pueden aplicar juntos o separados)

### Paginación

-   `page` : Número de página.
-   `limit` : Número de elementos por página.

### Ordenamiento

-   `orderby` : [ name ]
-   `orderdir` : [ asc, desc] // opcional

### Ejemplo de Solicitud

http://localhost:3001/animal/getAnimals?name=lok&gender=male&species=dog&size=medium&status=adopted&disability_illness=true&castrated=false&vaccines=true&age_min=5&age_max=15&orderby=name&orderdir=asc&limit=5&page=1
