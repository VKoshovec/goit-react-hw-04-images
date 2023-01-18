// import css from './contactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contacts}) => {
    return (
      <ul>
        { contacts.map((element)=> {
          return <ContactItem key = { element.id }
             name = { element.name }
             number = { element.number }
          />
        }) }
      </ul>   
    );
}

export default ContactList;