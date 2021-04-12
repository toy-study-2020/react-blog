import Form from './Form';
import { ROUTER } from '../libs/constants';

const FormGroup = ({iter, isLogin}) => {
  const {member} = ROUTER;
  return (
    <form>
      {iter.map(f => (
        <Form
          key={f}
          title={f.toUpperCase()}
          type={f === 'password' ? 'password' : 'text'} />
        ))
      }
      <button
        type="submit"
        className={isLogin ? 'btnLogin' : 'btnRegister'}>
          <span>
            {isLogin ? member[0].toUpperCase() : member[1].toUpperCase()}
          </span>
      </button>
    </form>
  );
};

export default FormGroup;
