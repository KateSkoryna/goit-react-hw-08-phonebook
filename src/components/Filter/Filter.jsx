import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterValue,
  selectContacts,
} from '../../redux/contacts/selectors';
import { Container } from '../App/Container.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    console.log(inputValue);
    console.log(contacts);

    const serchContact = contacts.filter(({ name }) =>
      name.toUpperCase().includes(inputValue.toUpperCase())
    );
    console.log(serchContact);
    if (serchContact.length === 0) {
      Notify.failure('Нет такого контакта');
    }
    dispatch(setFilterValue(inputValue));
  };

  return (
    <section>
      <Container>
        <FilterTitle>
          Find contact by name:
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={filterInputHandler}
            title="Search field"
            required
          />
        </FilterTitle>
      </Container>
    </section>
  );
};

export default Filter;
