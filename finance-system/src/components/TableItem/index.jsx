import PropTypes from 'prop-types';

import { formatDate } from '../../utils/dateFilter';
import { categories } from '../../data/categories';
import * as C from './styles';

export default function TableItem({ item }) {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>

      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>

      <C.TableColumn>{item.title}</C.TableColumn>

      <C.TableColumn>
        <C.Value coll={categories[item.category].expense}>
          {item.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </C.Value>
      </C.TableColumn>

    </C.TableLine>
  );
}

TableItem.propTypes = {
  item: PropTypes.shape({}),
}.isRequired;
