const Error = {
  email: "",
  priority_filds: "",
  number_required: "",
  showerror: false,
};

export default function validateform(data) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (
    !data.name ||
    !data.lastName ||
    !data.email ||
    !data.password ||
    !data.phone ||
    !data.address
  ) {
    Error.showerror = !Error.showerror;
    Error.priority_filds = "Debe completar todo los campos obligatorios *";
  }
  if (typeof Number(data.phone) !== "number") {
    Error.showerror = !Error.showerror;
    Error.number_required = "El campo debe ser numerico";
  }

  if (!regexEmail.test(data.email)) {
    Error.Showerror = !Error.showerror;
    Error.email = "El campo debe ser un email";
  }
  return Error;
}
