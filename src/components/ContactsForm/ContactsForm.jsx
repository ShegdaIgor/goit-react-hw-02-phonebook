import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContactData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getContactFormData = e => {
    e.preventDefault();

    // const { name, number } = this.state;

    // if (this.props.handleSubmitForm(name, number)) {
    //   this.setState({
    //     name: '',
    //     number: '',
    //   });
    // }
    this.props.handleSubmitForm(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleContactData, getContactFormData } = this;

    return (
      <form onSubmit={getContactFormData} className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactData}
          />
        </div>

        <div className={css.inputWrapper}>
          <label className={css.formLabel}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleContactData}
            value={number}
          />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
