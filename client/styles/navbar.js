import glamorous from 'glamorous';
import { mediaQueries } from './global';
import { LinkWrapper } from './homePage';

const Container = glamorous.nav({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '0 30px',
  backgroundColor: '#FFF',
  fontFamily: 'Nunito',
  zIndex: 5,
  transition: 'height 0.5s ease-out',
  color: '#FFF',
  [mediaQueries.tablet]: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
  },
}, ({ theme, open }) => ({
  boxShadow: theme.boxShadow,
  ...open && {
    '& .navbar-links': {
      display: 'flex',
    },
    '& .mobile-menu span': {
      width: '100%',
    },
    '& .logout-link': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

const Brand = glamorous.div({
  fontSize: '1.6rem',
  fontFamily: 'Dosis',
  fontWeight: 300,
  margin: '15px 0',
  '& span': {
    fontWeight: 800,
  },
  '& a': {
    textDecoration: 'none',
  },
}, ({ theme }) => ({
  '& a': {
    color: theme.mainColor,
  },
}));

const Bars = glamorous.div({
  width: '30px',
  height: '18px',
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
  '&:after, &:before, & span': {
    border: '2px solid #333',
    borderRadius: '6px',
    content: ' ',
    position: 'absolute',
    backgroundColor: '#333',
  },
  '&:after': {
    width: '100%',
    top: 0,
  },
  '&:before': {
    width: '100%',
    bottom: 0,
  },
  '& span': {
    width: '70%',
    top: '50%',
    right: 0,
    transition: 'width .3s ease-out',
    transform: 'translateY(-50%)',
  },
  [mediaQueries.tablet]: {
    display: 'none',
  },
});

const Links = glamorous.div({
  display: 'none',
  fontWeight: 300,
  transition: 'all .3s',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& a': {
    color: '#555',
    textDecoration: 'none',
    display: 'inline-flex',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    '&.active': {
      color: '#333',
      fontWeight: 600,
    },
  },
  [mediaQueries.tablet]: {
    display: 'flex',
  },
});

const LogoutLink = glamorous(LinkWrapper)({
  display: 'none',
  '& a': {
    color: '#333',
    fontWeight: 700,
    marginTop: 0,
    padding: '10px 15px',
  },
  [mediaQueries.tablet]: {
    display: 'block',
  },
}, ({ theme }) => ({
  '& a': {
    '&:hover:before': {
      borderBottomColor: theme.mainColor,
      borderLeftColor: theme.mainColor,
    },
    '&:hover:after': {
      borderTopColor: theme.mainColor,
      borderRightColor: theme.mainColor,
    },
  },
}));

export {
  Container,
  Brand,
  Bars,
  Links,
  LogoutLink,
};
