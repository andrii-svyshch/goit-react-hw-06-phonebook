import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selector';
import * as actions from '../../redux/actions';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e =>
            dispatch(actions.filterContact(e.target.value))
          }
        ></input>
      </label>
    </div>
  );
}
