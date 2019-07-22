import moment from 'moment';
import { createValidations } from '../../src';
import createRequiredValidation from '../validationRecipes/createRequiredValidation';
import createMaxLengthValidation from '../validationRecipes/createMaxLengthValidation';

export default {
  name: createValidations(
    [],
    createRequiredValidation('Please enter your name.'),
    createMaxLengthValidation(
      100,
      ({ length, max }) =>
        `Name should not have more than ${max} characters. (${
          length > max ? 0 : max - length
        } characters beyond)`
    )
  ),
  email: createValidations(
    [],
    createRequiredValidation('Please enter your email.'),
    createMaxLengthValidation(
      300,
      ({ length, max }) =>
        `Email should not have more than ${max} characters. (${
          length > max ? 0 : max - length
        } characters beyond)`
    )
  ),
  birthday: createValidations([], createRequiredValidation('Please enter your birthday.'), args => {
    const { data, path, value } = args;
    const date = moment(value);
    const now = moment();
    const isValid = !value || (date.isValid() ? now.valueOf() > date.valueOf() : false);
    const message = `Please enter a valid date not beyond "${now.format(
      'DD/MM/YYYY'
    )}" e.g. 21/01/2010 (DD/MM/YYYY)`;

    return {
      data,
      isValid,
      key: `${path}-date-invalid`,
      message,
      path,
      value,
    };
  }),
};
