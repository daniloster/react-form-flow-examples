import React, { useRef } from 'react';
import styled from 'styled-components';
import FormFlowProvider from '../../src';
import schemaData from './schemaData';
import AddressBookForm from './AddressBookForm';

const AddressBookLayout = styled.div``;

export default function AddressBook() {
  const initialState = useRef({});

  return (
    <AddressBookLayout>
      <FormFlowProvider initialData={initialState.current} schemaData={schemaData}>
        <AddressBookForm />
      </FormFlowProvider>
    </AddressBookLayout>
  );
}

AddressBook.propTypes = {};
