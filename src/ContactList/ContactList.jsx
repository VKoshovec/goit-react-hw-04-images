// import css from './contactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contacts, onClick}) => {
    return (
      <ul>
        { contacts.map((element)=> {
          return <ContactItem key = { element.id }
             name = { element.name }
             number = { element.number }
             onClick = { onClick }
          />
        }) }
      </ul>   
    );
}

export default ContactList;