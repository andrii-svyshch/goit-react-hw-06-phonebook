import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from 'components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(
    prevState =>
      contacts !== prevState &&
      localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts],
  );

  const duplicateValidator = name =>
    contacts.find(contact => contact.name === name);

  const contactFormSubmitHandler = (name, number) => {
    duplicateValidator(name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [
          { name: name, number: number, id: uuidv4() },
          ...prevState,
        ]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contactFormSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
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

const mapStateToProps = state => {
  return {
    contacts: state.contacts.item,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: () => dispatch(actions.filterContact),
    onSubmit: () => dispatch(actions.addContact),
    onDeleteContact: () => dispatch(actions.deleteContact),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
