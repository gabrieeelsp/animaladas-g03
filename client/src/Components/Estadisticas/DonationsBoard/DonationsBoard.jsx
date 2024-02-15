import { useEffect, useState } from "react";
import CardResumen from "../CardResumen/CardResumen"
import DonationsBarsChart from "../DonationsBarChart/DonationsBarsChart"
import DonationsBarHistogramaChart from "../DonationsBarHistogramaChart/DonationsBarHistogramaChart"
import { useSelector } from "react-redux";
import { getMoneyString } from "../../../utils";

const DonationsBoard = () => {

    const {donations } = useSelector((state) => state.rootReducer.estadisticas);

    const [montoTotal, setMontoTotal] = useState(0);
    const [cantidadDonaciones, setCantidadDonaciones] = useState(0);
    const [montoPromedio, setMontoPromedio] = useState(0);
    const [montoMaximo, setMontoMaximo] = useState(0);

    useEffect(() => {
        let monto = 0;
        let maximo = 0;
        for ( const d of donations) {
            monto += d.amount;
            if ( d.amount > maximo ) maximo = d.amount
        }
        setMontoTotal(getMoneyString(monto))
        setCantidadDonaciones(donations.length)
        setMontoMaximo(getMoneyString(maximo))
        setMontoPromedio( donations.length !== 0 ? getMoneyString(monto / donations.length) : 0)
    }, [donations])

    return (
        <>
            <div className='row'>
                <div className='col col-md-3'>
                    <CardResumen title='Total Donado' value={montoTotal} />
                </div>
                <div className='col col-md-3'>
                    <CardResumen title='Cantidad de Donaciones' value={cantidadDonaciones} />
                </div>
                <div className='col col-md-3'>
                    <CardResumen title='Valor Promedio de Donaciones' value={montoPromedio} />
                </div>
                <div className='col col-md-3'>
                    <CardResumen title='Valor Máximo Donado' value={montoMaximo} />
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-6'>
                    <div className='m-auto bg-white rounded-3'>
                        
                        <DonationsBarsChart />
                    </div>
                    
                </div>
                <div className='col col-md-6'>
                    <div className='bg-white rounded-3'>
                        
                        <DonationsBarHistogramaChart /> 
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DonationsBoard;
