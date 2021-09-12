import moment from 'moment';
import SchemaBuilder from '../SchemaBuilder';

export default SchemaBuilder.builder()
  .with("name")
  .check("required")
  .check("max-length", { max: 20 })
  .end()
  .with("email")
  .check("required")
  .check("max-length", { max: 300 })
  .end()
  .with("birthday")
  .check("required")
  .test("date-invalid", (metadata) => {
    const { data, path, value } = metadata;
    const date = moment(value);
    const now = moment();
    const isValid = !value || (date.isValid() ? now.valueOf() > date.valueOf() : false);
    const message = `Please enter a valid date not beyond "${now.format(
      'DD/MM/YYYY'
    )}" e.g. 21/01/2010 (DD/MM/YYYY)`;

    return isValid;
  }, (metadata) => {
    const now = moment();
    const message = `Please enter a valid date not beyond "${now.format(
      'DD/MM/YYYY'
    )}" e.g. 21/01/2010 (DD/MM/YYYY)`;

    return { message };
  })
  .end()
  .build()
