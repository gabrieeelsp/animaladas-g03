export default function ModalAnimals() {
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-warning">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modificar animal</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                      <input type="text" className="form-control" id="recipient-name" readOnly />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Especie:</label>
                      <input type="text" className="form-control" id="recipient-name" readOnly />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Género:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Estado:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Tamaño:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Año de nacimiento:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Peso:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Historia de rescate:</label>
                      <textarea className="form-control" id="message-text"></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Historia de adopción:</label>
                      <textarea className="form-control" id="message-text"></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Foto para adopción:</label>
                      <input type="file" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Foto adoptado:</label>
                      <input type="file" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="recipient-name" className="col-form-label me-3">Vacunado</label>
                      <input type="checkbox" className="form-check-input" id="recipient-name" />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="recipient-name" className="col-form-label me-3">Cuidados especiales</label>
                      <input type="checkbox" className="form-check-input" id="recipient-name" />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="recipient-name" className="col-form-label me-3">Castrado</label>
                      <input type="checkbox" className="form-check-input my-2" id="recipient-name" />
                    </div>
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
    