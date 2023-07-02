import PropTypes from 'prop-types';

import * as C from './styles';
import TableItem from '../TableItem';

export default function TableArea({ list }) {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem item={item} key={index}/>
        ))}
      </tbody>

    </C.Table>
  );
}

TableArea.propTypes = {
  list: PropTypes.array
}.isRequired;
