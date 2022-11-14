import {
  ContactSection,
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { useEffect } from 'react';
import {
  selectContactsByName,
  selectLoadingStatus,
} from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import Loader from 'components/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactSection>
      <h2>Contacts</h2>
      <ContactListBox>
        {isLoading && <Loader />}
        {contacts.map(({ id, name, phone }) => (
          <ContactListItem key={id}>
            <ContactListText>{name}</ContactListText>
            <ContactListText>{phone}</ContactListText>
            <ContactListBtn
              variant="contained"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete contact
            </ContactListBtn>
          </ContactListItem>
        ))}
      </ContactListBox>
    </ContactSection>
  );
};

export default ContactList;
