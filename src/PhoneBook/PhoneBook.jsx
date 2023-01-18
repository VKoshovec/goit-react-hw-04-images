import { Component } from "react";
import css from './phoneBook.module.css';
import ContactList from "../ContactList/ContactList";
import ContactAddForm from "../ContactAddForm/ContactAddForm";

class PhoneBook extends Component {

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        ],
        name: '' 
    }

    addContact = (newContact) => {
      const  newContacts  = this.state.contacts; 
      newContacts.push(newContact);
      this.setState(
        {contacts: newContacts}
      )
    }

    render () {

        const contactList = this.state.contacts;

        return (
        <div className= {css.phoneBook}>
            <h1>Phonebook</h1>
            <ContactAddForm onSubmit= { res => this.addContact(res) } />
            <h2>Contacts</h2>
            <ContactList contacts={ contactList } />
        </div>
        )
    }
}

export default PhoneBook;