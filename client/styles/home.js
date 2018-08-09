import glamorous from 'glamorous';
import { mediaQueries } from './global';
import imageSrc from '../assets/home-background.jpg';

const Container = glamorous.div({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  maxHeight: '100vh',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
});

const Background = glamorous.div({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
  background: `url(${imageSrc}) center center no-repeat`,
  backgroundSize: 'cover',
  ':before': {
    content: ' ',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.8,
  },
}, ({ theme }) => ({
  color: theme.mainColor,
  ':before': {
    background: theme.gradient,
  },
}));

const Title = glamorous.h1({
  zIndex: 2,
  fontSize: '4.2rem',
  fontWeight: 800,
  fontFamily: 'Dosis',
  textAlign: 'center',
  margin: '10px 0',
  [mediaQueries.tablet]: {
    fontSize: '7.6rem',
  },
});

const Description = glamorous.h4({
  zIndex: 2,
  fontSize: '1.4rem',
  padding: '10px',
  fontWeight: 300,
  textAlign: 'center',
  margin: '10px 0',
  lineHeight: '2.5rem',
  [mediaQueries.tablet]: {
    fontSize: '1.8rem',
    maxWidth: '800px',
  },
});

const LinkWrapper = glamorous.div({
  zIndex: 5,
  '& img': {
    marginRight: '5px',
  },
  '& a, & button': {
    color: '#fff',
    fontWeight: 500,
    padding: '20px',
    textDecoration: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    position: 'relative',
    [mediaQueries.tablet]: {
      fontSize: '1.25rem',
    },
    '&:before, &:after': {
      position: 'absolute',
      content: ' ',
      width: '0%',
      height: '0%',
      border: '4px solid transparent',
      boxSizing: 'inherit',
    },
    '&:before': {
      bottom: 0,
      right: 0,
    },
    '&:after': {
      top: 0,
      left: 0,
    },
    '&:hover:before': {
      width: '100%',
      height: '100%',
      borderBottomColor: '#FFF',
      borderLeftColor: '#FFF',
      transition:
        `width .12s ease-out,
        height .12s ease-out .12s`,
    },
    '&:hover:after': {
      width: '100%',
      height: '100%',
      borderTopColor: '#FFF',
      borderRightColor: '#FFF',
      transition:
        `border-color 0s ease-out .24s,
        width .12s ease-out .24s,
        height .12s ease-out .36s`,
    },
  },
});

export {
  Container,
  Background,
  Title,
  Description,
  LinkWrapper,
};
