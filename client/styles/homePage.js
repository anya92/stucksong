import glamorous from 'glamorous';
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
  fontSize: '4.5rem',
  fontWeight: 800,
  fontFamily: 'Dosis',
  textAlign: 'center',
  margin: '10px 0',
});

const Description = glamorous.h4({
  // textTransform: 'uppercase',
  zIndex: 2,
  fontSize: '1.6rem',
  padding: '10px',
  fontWeight: 300,
  textAlign: 'center',
  margin: '10px 0',
  lineHeight: '2.5rem',
});

const LinkWrapper = glamorous.div({
  zIndex: 5,
  '& .fa': {
    marginRight: '5px',
    fontSize: '1.4rem',
  },
  '& a': {
    color: '#fff',
    fontWeight: 400,
    padding: '20px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '40px',
    position: 'relative',
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
      width: '100%',
      borderBottomColor: '#FFF',
    },
    '&:after': {
      top: 0,
      left: 0,
    },
    '&:hover:before': {
      height: '100%',
      borderLeftColor: '#FFF',
      transition:
        'height .25s ease-out',
    },
    '&:hover:after': {
      width: '100%',
      height: '100%',
      borderTopColor: '#FFF',
      borderRightColor: '#FFF',
      transition:
        `border-color 0s ease-out .25s,
        width .25s ease-out .25s,
        height .25s ease-out .5s`,
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
