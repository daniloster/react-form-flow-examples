import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Validation from './Validation';

const DropdownFieldLayout = styled.div`
  padding: 0 0 10px 0;
  display: grid;
  grid-template-columns: min-content;
  grid-template-rows: min-content auto;

  label {
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: min-content min-content min-content;
    white-space: nowrap;
    grid-gap: 10px;
  }

  .DropdownFieldLayout__validations {
    display: block;
    white-space: nowrap;
  }
`;

export default function DropdownField({
  empty,
  errors,
  field,
  formatText,
  formatValue,
  label: labelText,
  options,
  submitted,
  touched,
}) {
  const id = useRef(uuid.v4());
  const { onBlur, onChangeValue, value = '' } = field;
  const onChange = useCallback(
    e => {
      const { value: optionValue } = e.target;

      onChangeValue(options.find(option => formatValue(option) === optionValue) || null);
    },
    [formatValue, onChangeValue, options]
  );

  return (
    <DropdownFieldLayout>
      <label htmlFor={id.current}>
        <span>{labelText}</span>
        <select onBlur={onBlur} onChange={onChange} value={formatValue(value)}>
          {empty && <option value={formatValue(empty)}>{formatText(empty)}</option>}
          {Boolean(options && options.length) &&
            options.map(option => {
              const text = formatText(option);
              const optionValue = formatValue(option);

              return (
                <option key={optionValue} value={optionValue}>
                  {text}
                </option>
              );
            })}
        </select>
      </label>
      <div className="DropdownFieldLayout__validations">
        {(submitted || touched) && <Validation errors={errors} />}
      </div>
    </DropdownFieldLayout>
  );
}

DropdownField.defaultProps = {
  empty: null,
  label: null,
  errors: [],
};
