import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from 'components/ContactList';

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,
};
