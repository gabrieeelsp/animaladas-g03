//importo el controller

const postUserHandler = async (req, res) => {
   const { name, email, password, phone } = req.body;
 
   const email_LC = email.toLowerCase();
 
   try {
        //Controller,
     res.status(200).json("respuesta del controller");
   } catch (error) {
     res.status(400).json(error.message);
  }
};

module.exports = {
    postUserHandler,
};