import styled from 'styled-components';

export const MemberStyle = styled.article`
  h2 {
    font-size: 20px;
    font-weight: bold;
  }

  .formWrap {
    margin-top: 30px;
  }

  strong {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const InputStyle = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  border-radius: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
`;

export const ButtonStyle = styled.button`
  display: block;
  width: 100%;
  height: 60px;
  background-color: #1d1d1d;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  border-radius: 10px;
  margin-top: 40px;
  color: #fff;
  font-size: 20px;
`;