import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styled from 'styled-components';
import Validation from './Validation';

const InputFieldLayout = styled.div`
  padding: 0 0 10px 0;
  label > span {
    display: block;
  }
  .InputFieldLayout__validations {
    display: block;
  }
`;

export default function InputField(props) {
  const { label: labelText, onChange, validations, value } = props;
  const id = useRef(uuid.v4());
  const [isVisited, setIsVisited] = useState(false);
  const onBlur = useCallback(() => {
    setIsVisited(true);
  }, []);

  return (
    <InputFieldLayout>
      <label htmlFor={id.current}>
        <span>{labelText}</span>
        <input id={id.current} type="text" onBlur={onBlur} onChange={onChange} value={value} />
      </label>
      <div className="InputFieldLayout__validations">
        {isVisited && <Validation validations={validations} />}
      </div>
    </InputFieldLayout>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  validations: PropTypes.arrayOf(PropTypes.shape({})),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputField.defaultProps = {
  label: null,
  validations: [],
  value: '',
};
