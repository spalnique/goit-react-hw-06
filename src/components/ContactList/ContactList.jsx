import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getContactsList } from '../../redux/contacts/selectors';
import { getFiltersValue } from '../../redux/filter/selectors';
import css from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const filterValue = useSelector(getFiltersValue);
  const contacts = useSelector(getContactsList);

  const filteredContacts = contacts.filter(({ username }) =>
    username.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
