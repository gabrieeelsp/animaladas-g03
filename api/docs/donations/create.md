## Crear una donacion

### Descripción

Este endpoint permite crear una donacion, luego de ser confirmada por la pasarela de pagos
El objeto Donation siempre esta asociado a un usuario
El objeto Donation puede estar o no asociado a un animal, en este útlimo caso se considera que la donación es para la fundación

### Endpoint

POST /donations

### Ejemplo de json de entrada

## Asociado a un Animal

{
"userId": 2,
"animalId": 5,
"amount": 10000
}

## Asociado a un Animal

{
"userId": 2,
"amount": 10000
}
