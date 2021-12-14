import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getFilteredContacts } from 'redux/selector';
import s from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {items.map(({ name, number, id }) => (
        <li className={s.item} key={uuidv4()}>
          <p>
            {name} : {number}
          </p>
          <button onClick={() => dispatch(actions.deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
