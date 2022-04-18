import { Container } from 'components/Container/Container';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

import { ContactList } from 'components/ContactList/ContactList';

import { PhoneBookTitle, ContactsTitle } from './PhoneBook.styled';

export const PhoneBook = () => {
  return (
    <Container>
      <PhoneBookTitle>Phonebook</PhoneBookTitle>
      <Form />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
