import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginAction, registerAction } from '../modules/auth';

const FormGroup = ({isLogin}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const [input, setInput] = useState({
    userId         : '',
    password       : '',
    passwordConfirm: '',
    name           : '',
    email          : '',
  });

  const {userId, password, name, email} = input;

  const msg = {
    userId         : 'ID를 입력하세요',
    password       : '비밀번호를 입력하세요',
    passwordConfirm: '비밀번호 확인을 입력하세요',
    name           : '이름을 입력하세요',
    email          : '이메일을 입력하세요'
  };

  const onChange = e => {
    const target = e.target;
    const key = target.name;
    const value = target.value;
    setInput({
      ...input,
      [key]: value
    });
  };

  const dispatchFunc = _ => {
    if (isLogin) {
      dispatch(loginAction({userId, password}));
    } else {
      dispatch(registerAction({userId, password, name, email}));
    }
  };

  const checkNullish = ({target, arr}) => {
    const nullishInput = arr.find(val => input[val] === '');

    if (!isLogin && input['password'] !== input['passwordConfirm']) {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
      return target.passwordConfirm.focus();
    }

    if (nullishInput) {
      alert(msg[nullishInput]);
      return target[nullishInput].focus();
    }

    dispatchFunc();
  };

  const onClick = e => {
    e.preventDefault();
    const inputArr = Object.keys(input);
    const validationInput = isLogin ? inputArr.slice(0, 2) : inputArr;
    checkNullish({
      arr   : validationInput,
      target: e.target.closest('form')
    });
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
            type="password"
            autoComplete="off"
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
              type="password"
              autoComplete="off"
              name="passwordConfirm"
              onChange={onChange}/>
          </label>
        </div>
        <div>
          <strong>NAME</strong>
          <label>
            <input
              type="text"
              name="name"
              onChange={onChange}/>
          </label>
        </div>
        <div>
          <strong>E-MAIL</strong>
          <label>
            <input
              type="text"
              name="email"
              onChange={onChange}/>
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
