import Form from './Form';

const FormGroup = ({iter}) => {
  return (
    <>
      {iter.map(f => (
        <Form
          key={f}
          title={f.toUpperCase()}
          type={f === 'password' ? 'password' : 'text'} />
        ))
      }
    </>
  );
};

export default FormGroup;
