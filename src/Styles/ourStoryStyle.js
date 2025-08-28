const leftImage = {
    width: 580,
    height: 600,
    objectFit: 'cover',
};

const imageMobile = {
    width: 323,
    height: 335,
    objectFit: 'cover',
};
const titleHeader = {
    font: 'Archivo',
    fontWeight: 500,
    fontSize: {xs: '24px', md: '36px'}, // Responsive font size
    fontStyle: 'medium',
    textAlign: 'center',
    marginLeft: '65px',
};

const paragraph = {
    font: 'Archivo',
    fontWeight: 500,
    fontSize: '12px',
    fontStyle: 'medium',
};

const italicQuote = {
    backgroundColor: '#4B5C3A', // or your preferred green
    color: '#fff',
    p: { xs: 2, md: 2 },
    mt: 5,
    borderRadius: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14.41,
    fontFamily: 'Archivo',
}


const ourStoryStyles = {
    leftImage: leftImage,
    imageMobile: imageMobile,
    titleHeader: titleHeader,
    paragraph: paragraph,
    italicQuote: italicQuote,
};

export default ourStoryStyles;