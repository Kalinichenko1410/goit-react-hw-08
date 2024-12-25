import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import s from './Contacts.module.css'
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';

import { selectIsError, selectIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';







const Contacts = () => {
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
return <Navigate to='/login' />
  };

  return (
  <div className={s.container}> 
      <h1>Phonebook</h1>
     <ContactForm />
    <SearchBox />
      {isLoading && <h2>Loading...</h2>}

      <ContactList />
    </div>
  )
}

export default Contacts