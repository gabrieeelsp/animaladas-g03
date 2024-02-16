const CardResumen = (props) => {
    const { title, value } = props;

    return (
        <>
            <div className="bg-white rounded-2 p-2 d-flex flex-column">
                <span className="align-self-start ms-3 text-secondary">{title}</span>
                <span className="fw-bold fs-4">{value}</span>
            </div>
        </>
    )
}

export default CardResumen;