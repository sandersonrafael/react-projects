import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

import * as C from './styles';

export default function InfoArea() {
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow >
          <BsFillArrowLeftSquareFill />
        </C.MonthArrow>

        <C.MonthTitle>
          Julho
        </C.MonthTitle>

        <C.MonthArrow >
          <BsFillArrowRightSquareFill />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>

      </C.ResumeArea>
    </C.Container>
  );
}
