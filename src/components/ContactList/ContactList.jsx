import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import styles from '../ContactItem/ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const contact = items.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter)
    );
    return contact;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.listContainer}>
      {visibleContacts.length > 0
        ? visibleContacts.map(({ id, name, phone }) => {
            return (
              <li className={styles.contactItem} key={id}>
                <ContactItem id={id} name={name} number={phone} />
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default ContactList;
