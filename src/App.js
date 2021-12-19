import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoading } from './redux/selector';
import operations from './redux/options';
import { RingLoader } from "react-spinners";
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
      <div className="conteiner">
        <Section title="Phonebook">
          <Form />
      </Section>
      {isLoadingContacts && <RingLoader size={120}/>}

      {!isLoadingContacts && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
      </div>
    )
}
