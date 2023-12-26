// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from '../../redux/operation';
import { selectContacts } from '../../redux/selectors';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const data = {
      name,
      phone: number,
    };

    const notify = () =>
      toast.success(`User, ${name},  has been added to your phone book`);

    const searchSameContact = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (searchSameContact) {
      const notify = () => toast.error(`${name} has been added already`);

      notify();
      return;
    }

    dispatch(addContact(data));
    notify();
    e.target.reset();
  };

  return (
    <>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <label className={css.lbl}>
          Name
          <input className={css.inp} type="text" name="name" required />
        </label>

        <label className={css.lbl}>
          Number
          <input className={css.inp} type="tel" name="number" required />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
        <Toaster />
      </form>
    </>
  );
};

export default Form;
