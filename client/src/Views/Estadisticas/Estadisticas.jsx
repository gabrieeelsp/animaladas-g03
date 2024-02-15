import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEstadisticas } from '../../redux/actions/actions';
import Filters from '../../Components/Estadisticas/Filters/Filters';
import DonationsBoard from '../../Components/Estadisticas/DonationsBoard/DonationsBoard';
import AdoptionsBoard from '../../Components/Estadisticas/AdoptionsBoard/AdoptionsBoard'
const Estadisticas = () => {

    // const [dateFom, setDateFrom] = useState('2018-01-01');
    // const [dateTo, setDateTo] = useState('2024-01-01');

    const {tabSelected, dateFrom, dateTo } = useSelector((state) => state.rootReducer.estadisticas);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEstadisticas(dateFrom, dateTo, tabSelected))
  }, [dateFrom, dateTo, tabSelected]);


  

    return (
        <>
            <h1>Estadisticas</h1>
            <div className='container bg-secondary-subtle p-2'>
                <div className='row'>
                    <div className='col'>
                        <Filters />
                    </div>
                </div>
                { tabSelected === 'donaciones' && 
                    <DonationsBoard />
                }
                { tabSelected === 'adopciones' && 
                    <AdoptionsBoard />
                }
                
                
            </div>
            
            
        </>
    )
}

export default Estadisticas;