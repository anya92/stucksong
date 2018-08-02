import glamorous from 'glamorous';
import imageSrc from '../assets/home-background.jpg';

const Container = glamorous.div({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  // fontFamily: 'Dosis',
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
    opacity: 0.85,
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

const Link = glamorous.div({
  zIndex: 5,
  '& .fa': {
    marginRight: '5px',
    fontSize: '1.3rem',
  },
  '& a': {
    color: '#fff',
    fontWeight: 400,
    padding: '20px',
    textDecoration: 'none',
    display: 'inline-block',
    borderBottom: '4px solid #FFF',
    marginTop: '40px',
    position: 'relative', 
    ':hover': {
      borderLeftWidth: '2px',
    },
  },
});

export {
  Container,
  Background,
  Title,
  Description,
  Link,
};
