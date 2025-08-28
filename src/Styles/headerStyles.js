const titleLogo = {
  width: 179,
  height: 'auto',
  display: { xs: 'none', md: 'block' },
};
const header = {
position: 'fixed',
  top: 32.5,
  left: 48,
  right: 48,
  zIndex: 1000,
  height: 48,
  backgroundColor: 'transparent',
  px: { xs: 2, md: 3 },    
};

const tagline = {
    color: 'white',
    letterSpacing: -1,
    fontWeight: 500,
    fontSize: 16,
    FontFamily: 'Archivo',
    width: { xs: '100%', md: 'auto' },
    textAlign: { xs: 'center', md: 'right' },
};

const headerStyles = {
    titleLogo: titleLogo,
    header: header,
    tagline: tagline
};

export default headerStyles;
