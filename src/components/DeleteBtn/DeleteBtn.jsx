import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './DeleteBtn.module.css';

export default class Button extends Component {
  render() {
    const { type, id, actionText, onDeleteContact } = this.props;
    return (
      <button
        type={type}
        className={css.buttonOnDelete}
        onClick={() => onDeleteContact(id)}
      >
        {actionText}
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  actionText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
