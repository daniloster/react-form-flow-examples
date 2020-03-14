import React from 'react';
import styled from 'styled-components';
import { useFormFlowField } from '../../src';
import InputField from '../fields/InputField';

const AddressBookFormLayout = styled.div``;

export default function AddressBookForm() {
  const nameField = useFormFlowField('name');
  const emailField = useFormFlowField('email');
  const birthdayField = useFormFlowField('birthday');

  return (
    <AddressBookFormLayout>
      <InputField {...nameField} label="Name" layout="grid" />
      <InputField {...emailField} label="Email" layout="grid" type="email" />
      <InputField {...birthdayField} label="Birthday" layout="grid" type="date" />
    </AddressBookFormLayout>
  );
}

AddressBookForm.propTypes = {};
