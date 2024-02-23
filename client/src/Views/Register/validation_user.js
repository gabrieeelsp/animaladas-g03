
export default function validateform(data) {
  const Error = {};
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,25}$/;
  const regexAddress = /^[a-zA-Z0-9\s,'-.ñÑáéíóúÁÉÍÓÚ]*$/;
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  if (!regexName.test(data.name)) {
    Error['name'] = "El campo nombre no puede ser mayor a 25 caracteres";
    Error['showerror_name'] = true;
  } else {
    Error['name'] = "";
    Error['showerror_name'] = false;
  }
  if (!regexName.test(data.lastName)) {
    Error['lastName'] = "El campo Apellido no puede ser mayor a 25 caracteres";
    Error['showerror_lastName'] = true;
  } else {
    Error['lastName'] = "";
    Error['showerror_lastName'] = false;
  }
  if (!regexEmail.test(data.email)) {
    Error['email'] = "El campo debe ser un email";
    Error['showerror_email'] = true;
  } else {
    Error['email'] = "";
    Error['showerror_email'] = false;
  }

  const numericphone = Number(data.phone);
  console.log("valor de numericphone", numericphone);
  if (Number.isNaN(numericphone)) {
    console.log("ingreso al condicional if");
    Error['phone'] = "Debe ingresar un número.";
    Error['showerror_phone'] = true;
    console.log("valor de errro en el if", Error);
  } else {
    console.log("ingreso al condicional else");
    Error['phone'] = "";
    Error['showerror_phone'] = false;
  }

  if (!regexAddress.test(data.address) || data.address.length > 30) {
    Error['address'] = "El campo direccion no puede contener caracterés especiales(@, #, $, !,etc)";
    Error['showerror_address'] = true;
  } else {
    Error['address'] = "";
    Error['showerror_address'] = false;
  }

  if(!regexPassword.test(data.password)){
    Error['password'] = "Al menos 8 caracteres, con una letra mayúscula y minuscula, un dígito y un caracter especial(@$!%*?&)";
    Error['showerror_password'] = true;
  } else {
    Error['password'] = "";
    Error['showerror_password'] = false;
  }

  if (
    (
      data.name !== "" &&
      data.lastName !== "" &&
      data.email !== "" &&
      data.phone !== "" &&
      data.address !== "",
      data.password !== "")
  ) {
    console.log("ingreso a condicional mission fields");
    Error.missing_fields = false;
    console.log("valor de error mission fileds", Error);
  } else {
    Error.missing_fields = true;
  }

  return Error;
}
// terminado
