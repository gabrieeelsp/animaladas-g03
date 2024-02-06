const Error = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  showerror_name: false,
  showerror_lastName: false,
  showerror_phone: false,
  showerror_address: false,
};

export default function validateform(data) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (data.name.length > 12) {
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

  if (Number.isNaN(numericphone)) {
    Error.phone = "Debe ingresar un número.";
    Error.showerror_phone = true;
  } else {
    Error.phone = "";
    Error.showerror_phone = false;
  }

  if (data.address.length > 12) {
    Error.address = "El campo direccion no puede ser mayor a 12 caracteres";
    Error.showerror_addresselse = true;
  } else {
    Error.phone = "";
    Error.showerror_phone = false;
  }

  return Error;
}
// terminado
