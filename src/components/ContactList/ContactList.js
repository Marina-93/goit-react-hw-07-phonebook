import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/selector';
import operations from '../../redux/options';
import PropTypes from "prop-types";
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(operations.deleteContact(id));

  return (
    <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className="button-list"
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}


ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}