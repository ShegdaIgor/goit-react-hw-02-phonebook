import React, { Component } from 'react';
import css from './ContactsInfo.module.css';

export default class ContactsInfo extends Component {
  render() {
    return (
      <div className={css.alert}>
        <p>There are no contacts here</p>
      </div>
    );
  }
}
