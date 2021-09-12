import React from 'react';
import styled from 'styled-components';

const LabelFeedback = styled.div`
  color: ${({ isColored, isValid }) => (isColored ? (isValid ? 'green' : 'red') : 'black')};
`;

const ValidationLayout = styled.section`
  .ValidationLayout__message {
    color: red;
  }
`;

export default function Validation({ isColored = false, label, errors = [] }) {
  return (
    <ValidationLayout>
      {!!label && (
        <LabelFeedback isColored={isColored} isValid={!errors.some(({ isValid }) => !isValid)}>
          {label}
        </LabelFeedback>
      )}
      {errors.map(({ key, message }) => (
        <React.Fragment key={key}>
          <div className="ValidationLayout__message">
            key: {key}
          </div>
          <div className="ValidationLayout__message">
            message: {message}
          </div>
        </React.Fragment>
      ))}
    </ValidationLayout>
  );
}
