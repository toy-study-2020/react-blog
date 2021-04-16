import FormGroup from '../../components/FormGroup';
import { MemberStyle } from '../../styles/memberStyle';

const Member = ({match, location, history}) => {
  // 로그인 케이스 임시처리
  const isLogin = match.path.indexOf('login') > -1;
  return (
    <MemberStyle>
      <h2>{isLogin ? '로그인' : '회원가입'}</h2>
      <FormGroup
        isLogin={isLogin}/>
    </MemberStyle>
  );
};

export default Member;
