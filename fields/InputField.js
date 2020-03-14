import React, { useRef } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Validation from './Validation';

const InputFieldLayout = styled.div`
  padding: 0 0 10px 0;

  display: ${({ layout }) => layout};
  grid-template-rows: auto;
  grid-template-columns: min-content minmax(1px, 100%);
  grid-column-gap: 10px;

  label > span {
    display: block;
  }
  .InputFieldLayout__validations {
    display: ${({ layout }) => layout};
    align-items: end;
  }
`;

export default function InputField(props) {
  const { label: labelText, layout, type, errors, field, submitted, touched } = props;
  const id = useRef(uuid.v4());

  return (
    <InputFieldLayout layout={layout}>
      <label htmlFor={id.current}>
        <span>{labelText}</span>
        <input id={id.current} type={type} {...field} value={field.value || ''} />
      </label>
      <div className="InputFieldLayout__validations">
        {(submitted || touched) && <Validation errors={errors} />}
      </div>
    </InputFieldLayout>
  );
}

InputField.Layout = InputFieldLayout;

InputField.defaultProps = {
  label: null,
  layout: 'block',
  type: 'text',
  errors: [],
};
