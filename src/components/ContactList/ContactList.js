import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table, Td, Span } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.items);

  return (
    <Table>
      <thead>
        <tr>
          <Td>
            <Span> Name</Span>
          </Td>
          <Td>Phone</Td>
          <Td>Action</Td>
        </tr>
      </thead>
      <tbody id="tbody">
        {contacts.map(({ name, id, number }) => {
          return (
            <tr key={id}>
              <ContactItem name={name} number={number} id={id} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
