import glamorous from 'glamorous';

const mediaQueries = {
  tablet: '@media only screen and (min-width: 748px)',
  desktop: '@media only screen and (min-width: 972px)',
};

const theme = {
  backgroundColor: '#f4f4f4',
  mainColor: '#B53471',
  gradient: 'linear-gradient(to top right, #1d2b64, #f8cdda)',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.07)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Nunito", "Segoe UI", Roboto, sans-serif',
};

const Container = glamorous.div({
  fontFamily: theme.fontFamily,
  color: '#333',
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '60px 20px 20px 20px',
  [mediaQueries.tablet]: {
    paddingTop: '80px',
  },
});

export {
  mediaQueries,
  theme,
  Container,
};
