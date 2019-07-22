import React, { useRef } from 'react';
import styled from 'styled-components';
import { useFormFlowItem } from '../../src';
import InputField from '../fields/InputField';

const AddressBookFormLayout = styled.div``;

export default function AddressBookForm() {
  const nameField = useFormFlowItem('name');
  const emailField = useFormFlowItem('email');
  const birthdayField = useFormFlowItem('birthday');

  return (
    <AddressBookFormLayout>
      <InputField {...nameField} label="Name" layout="grid" />
      <InputField {...emailField} label="Email" layout="grid" type="email" />
      <InputField {...birthdayField} label="Birthday" layout="grid" type="date" />
    </AddressBookFormLayout>
  );
}

AddressBookForm.propTypes = {};
