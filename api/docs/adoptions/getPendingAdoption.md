## Obtener una adoption pendiente

### Descripción

Este endpoint permite obtener una adopcion si esta pendiento, id de usuario y animal
Devuelve un error 404 si no hay una adopcion pendiente para el usuario y el animal seleccionado.

### Endpoint

POST /adoptions/get_pending_adoption?userId=2&animalId=8
