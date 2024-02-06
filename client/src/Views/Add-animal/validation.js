const Error = {
  name: "",
  species: "",
  email: "",
  status: "",
  size: "",
  weight: "",
  gender: "",
  priority_filds: "",
  estimatedBirthYear: "",
  showerror_priority_filds: false,
  showerror_estimatedBirthYear: false,
  showerror_name: false,
  showerror_species: false,
  showerror_email: false,
  showerror_status: false,
  showerror_weight: false,
  showerror_gender: false,
  showerror_size: false,
};

export default function validateform(data) {
  console.log("ingreso al archivso validation.js");
  /*
  if (
    data.name === "" ||
    data.gender === "" ||
    data.species === "" ||
    data.status === "" ||
    data.weight === "" ||
    data.estimatedBirthYear === "" ||
    data.size === ""
  ) {
    Error.priority_filds = "Debe completar todo los campos obligatorios (*)";
  } else {
    Error.priority_filds = "";
    Error.showerror_priority_filds = false;
  }
*/
  if (data.name.length > 10) {
    Error.name = "El campo nombre no puede ser mayor a 10 caracteres";
    Error.showerror_name = true;
  } else {
    Error.name = "";
    Error.showerror_name = false;
  }
  /*
  if (data.status === "") {
    Error.status = "El campo estado no puede estar vacío";
    Error.showerror_status = true;
  }
*/
  /*
  if (data.species === "") {
    Error.species = "El campo especie no puede estar vacío";
    Error.showerror_species = true;
  }
*/
  /*
  if (data.size === "") {
    Error.size = "El campo tamaño no puede estar vacío";
    Error.showerror_size = true;
  }
*/
  /*
  if (data.weight === "") {
    Error.weight = "El campo peso no puede estar vacío";
    Error.showerror_weight = true;
  }
*/
  const numericWeight = Number(data.weight);
  if (Number.isNaN(numericWeight)) {
    Error.weight = "Debe ingresar un número.";
    Error.showerror_weight = true;
  } else {
    Error.weight = "";
    Error.showerror_weight = false;
  }

  const numericestimatedBirthYear = Number(data.estimatedBirthYear);
  if (Number.isNaN(numericestimatedBirthYear)) {
    Error.estimatedBirthYear = "Debe ingresar un número.";
    Error.showerror_estimatedBirthYear = true;
  } else {
    Error.estimatedBirthYear = "";
    Error.showerror_estimatedBirthYear = false;
  }
  /*
  if (data.gender === "") {
    Error.gender = "El campo genero no puede estar vacío";
    Error.showerror_gender = true;
  }
*/ console.log("valor de Error antes", Error);
  return Error;
}
// terminado
