import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { changeFilter } from '../../redux/actions';
import PropTypes from "prop-types";
import './Filter.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  )
}


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}