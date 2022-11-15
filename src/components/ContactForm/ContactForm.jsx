import React from 'react';
import { Formik, Field } from 'formik';
import {
  FormSection,
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Container } from '../App/Container.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactForm = () => {
  const initualValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleOnSubmit = (values, { resetForm }) => {
    contacts.find(
      contact => values.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? Notify.failure(`${values.name} is already in contacts`)
      : dispatch(addContact(values));
    resetForm();
  };

  return (
    <FormSection>
      <Container>
        <h2>Add contact:</h2>
        <Formik initialValues={initualValues} onSubmit={handleOnSubmit}>
          <FormBox>
            <FormLabel>Name</FormLabel>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              as={FormInput}
              required
            />
            <FormLabel>Number</FormLabel>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              as={FormInput}
              required
            />
            <FormButton variant="contained" type="submit">
              Add contact
            </FormButton>
          </FormBox>
        </Formik>
      </Container>
    </FormSection>
  );
};

export default ContactForm;
