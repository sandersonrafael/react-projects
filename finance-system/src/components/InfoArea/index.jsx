import PropTypes from 'prop-types';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

import { formatCurrentMont } from '../../utils/dateFilter';
import ResumeItem from '../ResumeItem';
import * as C from './styles';

export default function InfoArea({
  currentMonth,
  onMonthChange,
  income,
  expense,
}) {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <BsFillArrowLeftSquareFill />
        </C.MonthArrow>

        <C.MonthTitle>{formatCurrentMont(currentMonth)}</C.MonthTitle>

        <C.MonthArrow onClick={handleNextMonth}>
          <BsFillArrowRightSquareFill />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} hasColor/>
      </C.ResumeArea>
    </C.Container>
  );
}

InfoArea.propTypes = {
  currentMonth: PropTypes.string,
  onMonthChange: PropTypes.string,
  income: PropTypes.number,
  expense: PropTypes.number,
}.isRequired;
