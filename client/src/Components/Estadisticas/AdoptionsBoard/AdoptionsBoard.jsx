import { useEffect, useState } from "react";
import CardResumen from "../CardResumen/CardResumen"
import AdoptionsBarsChart from "../AdoptionsBarChart/AdoptionsBarsChart";
import AdoptionsBarHistogramaChart from "../AdoptionsBarHistogramaChart/AdoptionsBarHistogramaChart";
import { useSelector } from "react-redux";

const AdoptionsBoard = () => {

    const {adoptions } = useSelector((state) => state.rootReducer.estadisticas);

    const [cantidadAdopciones, setCantidadDonaciones] = useState(0);
    const [mediaTiempoResolucion, setMediaTiempoResolucion] = useState('');

    useEffect(() => {
        let diferenciaTotal = 0;
        for ( const d of adoptions) {
            diferenciaTotal += Math.abs(new Date(d.createdAt).getTime() - new Date(d.resolveDate).getTime());
        }
        const diasDeDiferencia = Math.ceil(diferenciaTotal / (1000 * 60 * 60 * 24));
        setMediaTiempoResolucion(adoptions.length !== 0 ? Number(diasDeDiferencia / adoptions.length).toFixed(2) : '-')
        setCantidadDonaciones(adoptions.length)

    }, [adoptions])

    return (
        <>
            <div className='row justify-content-center'> {/* Utiliza estas clases para centrar horizontalmente */}
                <div className='col col-md-3 d-flex justify-content-center'> {/* Utiliza estas clases para centrar horizontalmente */}
                    <CardResumen title='Cantidad de Adopciones' value={cantidadAdopciones} />
                </div>
                <div className='col col-md-3 d-flex justify-content-center'> {/* Utiliza estas clases para centrar horizontalmente */}
                    <CardResumen title='Tiempo medio de Resolución' value={mediaTiempoResolucion} />
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-6'>
                    <div className='m-auto bg-white rounded-3'>
                        <AdoptionsBarsChart />
                    </div>
                </div>
                <div className='col col-md-6'>
                    <div className='bg-white rounded-3'>
                        <AdoptionsBarHistogramaChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdoptionsBoard;
