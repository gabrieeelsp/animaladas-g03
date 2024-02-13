-post http://localhost:3001/user/createUser

recibe del front: name, lastName, email, password, phone, address, imageProfile.

se encarga de ver si el usuario existe, si no existe crea una cuenta con los datos
del usuario, crea un token el cual se envia dentro de un link al correo del usuario para verificar la cuenta, si no se crea el usuario o no se envia el mensaje
retorna el error correspondiente.

le envia al front: O el mensaje de error si hubo alguno o retorna un mensaje diciendo que todo salio bien.

-get http://localhost:3001/user/verifyAccount

esta es la ur a la cual el usuario le da click para verificar su cuenta, dicha url
se encarga de ver si el token es valido de ser asi cambia el estado de de verificacion del usuario y si todo sale bien o sale mal se redirige a una url del front pasandole el mensaje de verificacion por query, si todo sale bien seria http://localhost:5173/verifyUser/${verifyAccount} y si hay un error seria algo asi
http://localhost:5173/verifyUser/${error.message}

-post http://localhost:3001/user/recoverPassword

sirve para cuando un usuario se le olvida su contraseña y quiere recuperarla.

recibe del front: el email de dicho ususario.

verifica que dicho email exista en la db de ser asi crea un token que expira en 1hora y lo envia por mail al correo del usuario en un link. cuando el usuario hace click en el link llega al back el token se verifica. si todo esta bien lo redirige a un link del front http://localhost:5173/changePassword/${userId} y algo sale mal en el token lo envia al mismno link pero le llega otro mensaje con el error http://localhost:5173/changePassword/${error.message}

y cuando el usuario este en ese link del front va a poder poner su nueva contraseña la cual el front enviara por body junto a id del ususario a este endpoint: http://localhost:3001/user/changePassword

-get http://localhost:3001/user/verifyToken

este seria el link que se uso en el post anterior para verificar el token y redirigir al usuario a el link del front.

-put http://localhost:3001/user/changePassword

recibe el front: userId y password.

este seria el endpoint donde le envia la nueva password y el id del ususario para actualizar la contraseña en la explicacion del anterior post.

-post http://localhost:3001/user/login

recibe del front: el email y la password.

se encarga de buscar la info del usuario en la db si no existe tira el mensaje con error y si existe crea un token con alguna info del usuario y la guarda dentro de un atributo del usuario buscado.

que le envia al front: un json con la info del usuario justo al token creado.

-get http://localhost:3001/user/searchAllUsers

busca todos los usuarios en la db y se los retorna al front en un json.

-put http://localhost:3001/user/users/:id

esta no la hice yo pero por lo que veo recibe un id por params el cual usa para cambiar un atributo de un ususario y desabilitarlo, nose si sirve para habilitarlo, toca revisarlo y ver si hay que cambiarlo.

-post http://localhost:3001/user/searchUser

recibe del front: email del usuario a buscar.

busca el usuario si existe retorna un json con la info del usuario, si no existe tira un mensaje con el error.

-put http://localhost:3001/user/changeUserData

recibe del front por body: id, name, lastName, password, phone, address, imageProfile.

el back se encarga de buscar el usuario por el id, y despues remplaza la nueva info
con la nueva y retorna un mensaje 'Informacion del Usuario actualizada.'

si el usuario no cambia la password enviar un string vacio.
