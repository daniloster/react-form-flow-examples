import React, { useRef } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Validation from './Validation';

const RadioFieldLayout = styled.div`
  padding: 0 0 10px 0;
  display: grid;
  grid-template-columns: min-content;
  grid-template-rows: min-content auto;

  label {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: auto;
    white-space: nowrap;
    grid-gap: 10px;
  }

  .RadioFieldLayout__validations {
    display: block;
    white-space: nowrap;
  }
`;

export default function RadioField({
  checkedValue,
  name,
  label: labelText,
  errors,
  field,
  submitted,
  touched,
}) {
  const id = useRef(uuid.v4());

  return (
    <RadioFieldLayout>
      <label htmlFor={id.current}>
        <span>{labelText}</span>
        <input
          id={id.current}
          name={name}
          type="radio"
          {...field}
          value={checkedValue}
          checked={field.value === checkedValue}
        />
      </label>
      <div className="RadioFieldLayout__validations">
        {(submitted || touched) && <Validation errors={errors} />}
      </div>
    </RadioFieldLayout>
  );
}

RadioField.defaultProps = {
  label: null,
  errors: [],
};
