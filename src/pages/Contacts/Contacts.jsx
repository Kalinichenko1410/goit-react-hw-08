import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import s from './Contacts.module.css'
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsError, selectIsLoading } from '../../redux/contactsSlice';




const Contacts = () => {
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
  )
}

export default Contacts