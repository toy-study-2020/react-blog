import Form from './Form';

const FormGroup = ({forms}) => {
  const formsComponents = forms.map(f => (
    <Form
      key={f}
      title={f.toUpperCase()}
      type={f === 'password' ? 'password' : 'text'}
    />
  ))
  return (
    <>
      {formsComponents}
    </>
  );
};

export default FormGroup;
