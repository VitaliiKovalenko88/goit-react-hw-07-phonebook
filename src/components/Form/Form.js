import { useState } from 'react';
import { FormContacts } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import toast, { Toaster } from 'react-hot-toast';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const generateID = () => nanoid();

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmite = e => {
    e.preventDefault();

    const dataContact = {
      id: generateID(),
      name,
      number,
    };

    const { value } = e.target.elements.name;

    const searchSameContact = contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );

    if (searchSameContact) {
      const notify = () => toast.error(`${name} has been added already`);

      notify();
      return;
    }
    dispatch(addContacts(dataContact));
    const notify = () =>
      toast.success(`User, ${name},  has been added to your phone book`);
    notify();
    resetForm(e);
  };

  const resetForm = e => {
    setName('');
    setNumber('');
    e.currentTarget.reset();
  };

  return (
    <FormContacts onSubmit={handleSubmite}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        placeholder="Michael Jackson"
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        placeholder="5454345345"
      />
      <button type="submit">Add contact</button>
      <Toaster />
    </FormContacts>
  );
};
