const CardResumen = (props) => {
    const { title, value } = props;

    return (
<div className="bg-dark text-warning rounded-2 p-2 d-flex flex-column align-items-center justify-content-center" style={{ border: '2px solid #FFC107', height: "115px" }}>
    <span className="text-center">{title}</span>
    <span className="fw-bold fs-4">{value}</span>
</div>

    );
};

export default CardResumen;
