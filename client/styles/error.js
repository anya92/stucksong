import glamorous from 'glamorous';

const ErrorContainer = glamorous.div({
  fontFamily: 'Nunito',
  fontSize: '20px',
  color: '#333',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h1': {
    fontSize: '5rem',
    margin: '20px 0',
  },
  '& h2': {
    fontSize: '1.6rem',
    fontWeight: 600,
    margin: '10px 0',
  },
  '& p': {
    color: '#555',
    fontWeight: 400,
  },
});

const Page404 = glamorous.div({
  fontFamily: 'Nunito',
  fontSize: '20px',
  color: '#333',
  height: 'calc(100vh - 100px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}, ({ theme }) => ({
  '& div': {
    fontSize: '6.8rem',
    fontWeight: 800,
    color: theme.mainColor,
  },
}));

export {
  ErrorContainer,
  Page404,
};
