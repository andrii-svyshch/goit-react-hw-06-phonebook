import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
