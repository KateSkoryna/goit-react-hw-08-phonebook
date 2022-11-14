import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from '../../redux/contacts/selectors';
import { Container } from '../App/Container.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
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
