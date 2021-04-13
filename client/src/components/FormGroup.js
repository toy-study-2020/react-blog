import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginAction } from '../modules/auth';

const FormGroup = ({isLogin}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const [input, setInput] = useState({
    userId  : '',
    password: ''
  });

  const {userId, password} = input;
  const onChange = e => {
    const target = e.target;
    const key = target.name;
    const value = target.value;
    setInput({
      ...input,
      [key]: value
    });
  };
  const onClick = e => {
    e.preventDefault();
    if (!userId || !password) {
      return alert('아이디, 비밀번호를 채워주세요');
    }
    dispatch(loginAction({userId, password}));
  };
  
  useEffect(_ => {
    if (user) {
      const data = JSON.stringify(user);
      sessionStorage.setItem('loginTest', data);
    }
  }, [user]);

  return (
    <form>
      <div>
        <strong>ID</strong>
        <label>
          <input
            type="text"
            name="userId"
            onChange={onChange}/>
        </label>
      </div>
      <div>
        <strong>PASSWORD</strong>
        <label>
          <input
            type="new-password"
            name="password"
            onChange={onChange}/>
        </label>
      </div>
      {!isLogin &&
      <>
        <div>
          <strong>PASSWORD CONFIRM</strong>
          <label>
            <input
              type="new-password"
              name="passwordConfirm"/>
          </label>
        </div>
        <div>
          <strong>NAME</strong>
          <label>
            <input type="text"/>
          </label>
        </div>
        <div>
          <strong>E-MAIL</strong>
          <label>
            <input type="text"/>
          </label>
        </div>
      </>
      }
      <button
        type="submit"
        className={isLogin ? 'btnLogin' : 'btnRegister'}
        onClick={onClick}>
        <span>
          {isLogin ? 'LOGIN' : 'REGISTER'}
        </span>
      </button>
    </form>
  );
};

export default FormGroup;
