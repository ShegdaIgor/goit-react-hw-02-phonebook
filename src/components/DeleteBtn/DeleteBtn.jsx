import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './DeleteBtn.module.css';

export default class DeleteBtn extends Component {
  render() {
    const { id, actionText, onDeleteContact } = this.props;
    return (
      <button
        type="button"
        className={css.buttonOnDelete}
        onClick={() => onDeleteContact(id)}
      >
        {actionText}
        {this.props.children}
      </button>
    );
  }
}

DeleteBtn.propTypes = {
  actionText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
