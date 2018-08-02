import glamorous from 'glamorous';

const theme = {
  backgroundColor: '#f4f4f4',
  mainColor: 'darken(#f8cdda, 30%)',
  gradient: 'linear-gradient(to top right, #1d2b64, #f8cdda)',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.07)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const Container = glamorous.div({
  fontFamily: theme.fontFamily,
  color: '#333',
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 15px',
});

export {
  theme,
  Container,
};
