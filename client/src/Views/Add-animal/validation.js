const Error = {
  name: "",
  gender: "",
  image2: "",
  image3: "",
  species: "",
  status: "",
  size: "",
  weight: "",
  vaccines: false,
  estimatebirthyear: "",
  castrated: false,
  disability_illness: false,
};

export default function validateform(data) {
  console.log("info data", data);

  if (
    !data.name ||
    !data.minheight ||
    !data.maxheight ||
    !data.url ||
    !data.minweight ||
    !data.maxweight ||
    !data.life_span
  ) {
    //    console.log("ingreso al if de trim")
    Error.showerror = !Error.showerror;
    Error.allinput = "you must fill in all the fields";
  }
  /*
    if(data.name.length>10){
        Error.showerror=!Error.showerror;
        Error.name= "The field cannot be longer than 10 characters"
    }
*/

  return Error;
}
