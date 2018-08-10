import glamorous from 'glamorous';
import { mediaQueries } from './global';

const CardsGrid = glamorous.div({
  '& > div:first-of-type': {
    marginTop: '20px',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    [mediaQueries.tablet]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    },
  },
});

const CardImage = glamorous.div({
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
  },
  '&:hover > div:first-of-type': {
    visibility: 'visible',
    opacity: 1,
    transitionDelay: '0s',
  },
});

const CardImageLink = glamorous.div({
  visibility: 'hidden',
  opacity: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(51, 51, 51, 0.7)',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'visibility 0s linear 0.5s, opacity 0.5s ease-out',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 800,
    width: '80px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

const CardImageDate = glamorous.div({
  position: 'absolute',
  bottom: 0,
  transform: 'translateY(-50%)',
  width: '100%',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
  fontWeight: 600,
  padding: '10px',
}, ({ theme }) => ({
  backgroundColor: theme.mainColor,
  opacity: 0.8,
}));

const CardInfo = glamorous.div({
  padding: '5px 0',
});

const CardTitle = glamorous.div({
  fontFamily: 'Open Sans',
  fontWeight: 800,
  fontSize: '1.1rem',
  '& span': {
    fontSize: '1.4rem',
  },
});

const CardText = glamorous.div({
  marginTop: '6px',
});

const CardArtist = glamorous.div({
  fontWeight: 700,
  marginTop: '4px',
});

const CardAlbum = glamorous.div({
  fontSize: '0.85rem',
  fontWeight: 300,
  marginTop: '4px',
  color: '#4c4c4c',
});

const CardGenres = glamorous.div({
  fontWeight: 300,
  lineHeight: '18px',
});

export {
  CardsGrid,
  CardImage,
  CardImageLink,
  CardImageDate,
  CardInfo,
  CardTitle,
  CardText,
  CardArtist,
  CardAlbum,
  CardGenres,
};
