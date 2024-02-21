import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAll, loadUsers, updateUser } from "../../redux/actions/actions";

export default function ModalUsers({user}) {

  if (!user) {
    return null;
  }

  const dispatch = useDispatch();
  const {id, name, lastName, phone, address, password, imageProfile} = user;
  const [updatedUserData, setUpdatedUserData] = useState(user || {
    id: '',
    name: '',
    lastName: '',
    phone: '',
    address: '',
    password: '',
    imageProfile: ''
  });

  useEffect(() => {
    setUpdatedUserData(user);
  }, [user]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleUpdateUser = async () => {
      await dispatch(updateUser(updatedUserData));
      dispatch(clearAll());
      dispatch(loadUsers());
    };
    
    

  return (
    <div>
      <div className="modal fade" id={`ModalU${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-warning">
              <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabelU">Modificar perfil - ID: {id}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control text-center" id="name" name="name" value={updatedUserData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="col-form-label">Apellido:</label>
                  <input type="text" className="form-control text-center" id="lastName" name="lastName" value={updatedUserData.lastName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="col-form-label">Contraseña:</label>
                  <input type="text" className="form-control text-center" id="password" name="password" value={updatedUserData.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="col-form-label">Número de contacto:</label>
                  <input type="text" className="form-control text-center" id="phone" name="phone" value={updatedUserData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="address" className="col-form-label">Dirección:</label>
                  <input type="text" className="form-control text-center" id="address" name="address" value={updatedUserData.address} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageProfile" className="col-form-label">Foto de perfil:</label>
                  <input type="file" className="form-control text-center" id="imageProfile" name="imageProfile" value={updatedUserData.imageProfile} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger fw-bold" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-success fw-bold" data-bs-dismiss="modal" onClick={handleUpdateUser}>Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
