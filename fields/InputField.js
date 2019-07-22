import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styled from 'styled-components';
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
  const { label: labelText, layout, onChange, type, validations, value } = props;
  const id = useRef(uuid.v4());
  const [isVisited, setIsVisited] = useState(false);
  const onBlur = useCallback(() => {
    setIsVisited(true);
  }, []);

  return (
    <InputFieldLayout layout={layout}>
      <label htmlFor={id.current}>
        <span>{labelText}</span>
        <input id={id.current} type={type} onBlur={onBlur} onChange={onChange} value={value} />
      </label>
      <div className="InputFieldLayout__validations">
        {isVisited && <Validation validations={validations} />}
      </div>
    </InputFieldLayout>
  );
}

InputField.Layout = InputFieldLayout;

InputField.propTypes = {
  label: PropTypes.string,
  layout: PropTypes.oneOf(['block', 'grid']),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  validations: PropTypes.arrayOf(PropTypes.shape({})),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputField.defaultProps = {
  label: null,
  layout: 'block',
  type: 'text',
  validations: [],
  value: '',
};
