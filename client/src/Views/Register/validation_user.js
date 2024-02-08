const Error = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  priority_fields: "",
  missing_fields: true,
  showerror_name: false,
  showerror_lastName: false,
  showerror_phone: false,
  showerror_address: false,
  showerror_priority_fields: false,
};

export default function validateform(data) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (data.name.length > 15) {
    Error.name = "El campo nombre no puede ser mayor a 12 caracteres";
    Error.showerror_name = true;
  } else {
    Error.name = "";
    Error.showerror_name = false;
  }
  if (data.lastName.length > 12) {
    Error.lastName = "El campo nombre no puede ser mayor a 12 caracteres";
    Error.showerror_lastName = true;
  } else {
    Error.lastName = "";
    Error.showerror_lastName = false;
  }
  if (!regexEmail.test(data.email)) {
    Error.email = "El campo debe ser un email";
    Error.showerror_email = true;
  } else {
    Error.email = "";
    Error.showerror_email = false;
  }

  const numericphone = Number(data.phone);
  console.log("valor de numericphone", numericphone);
  if (Number.isNaN(numericphone)) {
    console.log("ingreso al condicional if");
    Error.phone = "Debe ingresar un número.";
    Error.showerror_phone = true;
    console.log("valor de errro en el if", Error);
  } else {
    console.log("ingreso al condicional else");
    Error.phone = "";
    Error.showerror_phone = false;
  }

  if (data.address.length > 20) {
    Error.address = "El campo direccion no puede ser mayor a 12 caracteres";
    Error.showerror_address = true;
  } else {
    Error.address = "";
    Error.showerror_address = false;
  }
  if (
    (Error.name === "" &&
      Error.lastName === "" &&
      Error.email === "" &&
      Error.phone === "" &&
      Error.address === "" &&
      Error.priority_fields === "" &&
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
