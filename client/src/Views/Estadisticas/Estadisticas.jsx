import { useState } from 'react';
import DonationsLineChart from '../../Components/Estadisticas/DonationsLineChart'
import DonationsBarsChart from '../../Components/Estadisticas/DonationsBarsChart'
const Estadisticas = () => {

    const [dateFom, setDateFrom] = useState('2018-01-01');
    const [dateTo, setDateTo] = useState('2024-01-01');
    return (
        <>
            <h1>Estadisticas</h1>
            <div className='row'>
                <div className='col'>
                    <div className='w-50 m-auto bg-white border border-3'>
                        <DonationsLineChart 
                            dateFom={dateFom}
                            dateTo={dateTo}
                        />
                        <DonationsBarsChart 
                            dateFom={dateFom}
                            dateTo={dateTo}
                        />
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default Estadisticas;