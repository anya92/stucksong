import glamorous from 'glamorous';
import { mediaQueries } from './global';

const PlaylistContainer = glamorous.div({
  display: 'grid',
  gridGap: '20px',
  gridTemplateColumns: '1fr',
  maxWidth: '900px',
  margin: '20px auto',
  '& h1': {
    margin: '20px 0',
    wordWrap: 'break-word',
  },
  '& h4': {
    fontWeight: 400,
  },
  '& img': {
    width: '100%',
  },
  [mediaQueries.tablet]: {
    gridTemplateColumns: 'minmax(auto, 260px) auto',
    '& form': {
      padding: '10px',
    },
  },
}, ({ theme }) => ({
  '& h1 a': {
    color: theme.mainColor,
    fontWeight: 800,
  },
}));

const FormGroup = glamorous.div({
  margin: '20px 0',
  '& label': {
    fontWeight: 700,
    display: 'block',
    marginBottom: '20px',
  },
  '& input, & textarea': {
    color: '#333',
    width: '100%',
    fontSize: '1rem',
    padding: '10px',
    border: '1.5px solid #EEE',
    borderRadius: '4px 0 0 4px',
    MozAppearance: 'textfield',
    outline: 'none',
    transition: 'border-color .2s',
  },
  [`& input::-webkit-outer-spin-button, 
    & input::-webkit-inner-spin-button`]: {
    marginLeft: '10px',
  },
  '& textarea': {
    resize: 'none',
  },
}, ({ theme, number }) => ({
  '& input:focus, & textarea:focus': {
    borderColor: theme.mainColor,
  },
  ...number && {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    '& label': {
      paddingRight: '10px',
      display: 'inline-flex',
      alignItems: 'center',
      margin: '20px 0',
    },
    '& input': {
      borderRadius: 0,
      border: 'none',
      borderBottom: '1.5px solid #EEE',
      width: '100px',
      fontSize: '2rem',
      textAlign: 'right',
      '&.danger': {
        borderColor: 'crimson',
      },
    },
  },
}));

const InputGroup = glamorous.div({
  display: 'flex',
});

const InputGroupAddon = glamorous.div({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 10px',
  backgroundColor: '#EEE',
  fontSize: '.9rem',
  borderRadius: '0 4px 4px 0',
});

const DangerInfo = glamorous.div({
  marginTop: '10px',
  fontSize: '.9rem',
  color: 'crimson',
  flex: '1 100%',
});

const FormButton = glamorous.div({
  '& button': {
    fontWeight: 600,
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '6px',
    background: '#FFF',
  },
}, ({ theme }) => ({
  '& button': {
    color: theme.mainColor,
    border: `2px solid ${theme.mainColor}`,
  },
}));

const PlaylistLinks = glamorous.div({
  marginBottom: '40px',
  display: 'grid',
  gridGap: '10px',
  '& a': {
    color: '#333',
    fontSize: '1.4rem',
    marginRight: '20px',
  },
});

const PlaylistLinkShare = glamorous.div({
  fontSize: '1.4rem',
  '& div:first-of-type': {
    marginTop: '10px',
    '& .SocialMediaShareButton': {
      display: 'inline-block',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'transform .3s ease-out',
      '&:hover': {
        transform: 'scale(1.4)',
      },
    },
  },
});

const PlaylistTracks = glamorous.div({
  display: 'grid',
  gridGap: '20px',
});

const PlaylistTrackTitle = glamorous.div({
  fontWeight: 600,
  fontSize: '1.2rem',
  marginBottom: '5px',
});

const PlaylistTrackInfo = glamorous.div({
  fontWeight: 300,
});

export {
  PlaylistContainer,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  DangerInfo,
  FormButton,
  PlaylistLinks,
  PlaylistLinkShare,
  PlaylistTracks,
  PlaylistTrackTitle,
  PlaylistTrackInfo,
};
