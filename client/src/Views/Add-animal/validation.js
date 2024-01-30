const Error = {
  name: "",
  gender: "",
  species: "",
  status: "",
  size: "",
  weight: "",
  estimatebirthyear: "",
  number_required: "",
  priority_filds: "",
  showerror: false,
};

export default function validateform(data) {
  if (
    !data.name ||
    !data.gender ||
    !data.species ||
    !data.status ||
    !data.size ||
    data.size ||
    !data.weight ||
    !data.estimatebirthyear
  ) {
    Error.showerror = !Error.showerror;
    Error.priority_filds = "Debe completar todo los campos obligatorios *";
  }
  if (
    typeof Number(data.weight) != "number" ||
    typeof Number(data.estimatebirthyear) != "number"
  ) {
    Error.showerror = !Error.showerror;
    Error.number_required = "El campo debe ser numerico";
  }
  return Error;
}
