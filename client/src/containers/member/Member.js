import FormGroup from '../../components/FormGroup';
import { REGISTER } from '../../libs/constants';

const Member = ({match, location, history}) => {
  // 로그인 케이스 임시처리
  const isLogin = match.path.indexOf('login') > -1;
  const formsKey = Object.keys(REGISTER);
  const iter = isLogin ? formsKey.slice(0, 2) : formsKey;
  return (
    <article>
      <h2>{isLogin ? '로그인' : '회원가입'}</h2>
      <FormGroup iter={iter} />
    </article>
  );
};

export default Member;
