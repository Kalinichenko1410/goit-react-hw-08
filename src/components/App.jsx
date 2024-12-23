import ContactList from './ContactList/ContactList';
import s from './App.module.css'; 
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectIsError, selectIsLoading } from '../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);



  return (
    <div className={s.container}> 
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      <ContactList />
    </div>
  );
}