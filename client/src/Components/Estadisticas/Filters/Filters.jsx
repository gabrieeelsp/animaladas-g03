import DateRangePicker from 'rsuite/DateRangePicker';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';
import 'rsuite/DateRangePicker/styles/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setEstadisticasDateRange, setEstadisticasTab } from '../../../redux/actions/actions';

const predefinedBottomRanges = [
  {
    label: 'Today',
    value: [new Date(), new Date()]
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)]
  },
  {
    label: 'This week',
    value: [startOfWeek(new Date()), endOfWeek(new Date())]
  },
  {
    label: 'Last 7 days',
    value: [subDays(new Date(), 6), new Date()]
  },
  {
    label: 'Last 30 days',
    value: [subDays(new Date(), 29), new Date()]
  },
  {
    label: 'This month',
    value: [startOfMonth(new Date()), new Date()]
  },
  {
    label: 'Last month',
    value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))]
  },
  {
    label: 'This year',
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()]
  },
  {
    label: 'Last year',
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)]
  },
];

const SelectRange = () => {
  const dispatch = useDispatch();
  const { dateFrom, dateTo, tabSelected } = useSelector((state) => state.rootReducer.estadisticas);

  const handleSetRange = (range) => {
    dispatch(setEstadisticasDateRange(range));
  };

  const handleSetTab = (event) => {
    dispatch(setEstadisticasTab(event.target.value));
  };

  return (
    <div className='row justify-content-center mb-1 p-2'>
      <div className='col col-md-4 d-flex'>
        <DateRangePicker
          value={[new Date(dateFrom), new Date(dateTo)]}
          ranges={predefinedBottomRanges}
          placeholder="One calendar"
          style={{ width: 300 }}
          format='dd-MM-yyyy'
          onChange={handleSetRange}
          showHeader={false}                
        />
      </div>
      <div className='col col-md-2 d-flex'>
        <select className="form-select"style={{ width: 300 }} value={tabSelected} onChange={handleSetTab} >
          <option value="donaciones">Donaciones</option>
          <option value="adopciones">Adopciones</option>
        </select>
      </div>
    </div>
  );
};

export default SelectRange;
