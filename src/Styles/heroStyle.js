const hero = {
position: 'relative',      // scope absolute children
  height: '100vh',           // full viewport height
  width: '100vw',            // full viewport width
  margin: 0,
  padding: 0,

  backgroundImage: `url('/assets/heroImage.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  overflow: 'hidden',        
};


 const mobileLogo = {
  display: {
    xs: 'block',
    md: 'none',
  },
  width: 141,
};

const waterMarkLogo = {
   display: {
    xs: 'block',
    md: 'block',
  },
  width: 100,
  height: 100,
};

const logoStack = {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 49,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  };

const heroStyles = {
    hero: hero,
    mobileLogo: mobileLogo,
    waterMarkLogo: waterMarkLogo,
    logoStack: logoStack
};

export default heroStyles;