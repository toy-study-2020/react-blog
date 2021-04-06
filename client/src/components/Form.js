const Form = ({title, type}) => {
  return (
    <div>
      <strong>{title}</strong>
      <label>
        <input type={type} />
      </label>
    </div>
  );
};

export default Form;
