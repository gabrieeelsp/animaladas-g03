
const ModalRejected = (props) => {
    const { show, setShow } = props;

    const handleCloseModal = () => {
        setShow(false);
    };

    return (
        <>
            {show && (
                <div className="rejected-modal-overlay">
                    <div className="rejected-modal-container">
                        <div className="rejected-modal-header">
                            <h2>Pago Rechazado</h2>
                        </div>
                        <div className="rejected-modal-body">
                            <p>Lo sentimos, tu pago ha sido rechazado.</p>
                        </div>
                        <div className="rejected-modal-footer">
                            <button onClick={handleCloseModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalRejected;
