export default function ModalUsers(users) {

  const {id, name, lastName, phone, address, password, imageProfile} = users;

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-warning">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modificar perfil</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control" id={name} placeholder={name} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Apellido:</label>
                  <input type="text" className="form-control"  id={lastName} placeholder={lastName} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Número de contacto:</label>
                  <input type="text" className="form-control" id={phone} placeholder={phone} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Dirección:</label>
                  <input type="text" className="form-control" id={address} placeholder={address} />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Contraseña:</label>
                  <input type="text" className="form-control" id={password} placeholder={password} />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Foto de perfil:</label>
                  <input type="file" className="form-control" id={imageProfile} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger fw-bold" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-success fw-bold">Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
