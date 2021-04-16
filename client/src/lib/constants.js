export const MENU = {
  IS_LOGIN : [
    {
      key : 1,
      name: 'HOME',
      link: '/'
    },
    {
      key : 2,
      name: 'LOGOUT',
      link: '/',
    },
  ],
  IS_LOGOUT: [
    {
      key : 1,
      name: 'HOME',
      link: '/'
    },
    {
      key : 2,
      name: 'LOGIN',
      link: '/member/login',
    },
    {
      key : 3,
      name: 'REGISTER',
      link: '/member/register',
    }
  ]
};

export const ROUTER = {
  member: ['home', 'login', 'register']
};
