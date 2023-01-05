import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import css from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import FilterContact from './FilterContact/FilterContact';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in the list`);
    }

    const contactObj = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactObj],
    }));
  };

  handleFilterContact = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  showFilteredContacts = () => {
    const filterString = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterString)
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const {
      handleSubmitForm,
      handleFilterContact,
      showFilteredContacts,
      handleDeleteContact,
    } = this;
    return (
      <div className={css.contacts}>
        <h1>Phonebook</h1>
        <ContactsForm handleSubmitForm={handleSubmitForm} />
        <h2>Contacts</h2>
        <FilterContact
          filter={filter}
          handleFilterContact={handleFilterContact}
        />
        <ContactsList
          showFilteredContacts={showFilteredContacts()}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    );
  }
}
