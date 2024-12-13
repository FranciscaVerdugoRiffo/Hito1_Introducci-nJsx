import headerImage from '../assets/Header-img.jpg';

const Header = () => (
    <header
        style={{
            backgroundImage: `url(${headerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ilter: 'brightness(50%)',
            padding: '50px',
            color: 'white',
            textAlign: 'center',
        }}
    >
        <h1>¡Bienvenido a Pizzería Mamma Mia!</h1>
        <p>La mejor pizza de la ciudad, preparada con ingredientes frescos y mucho amor.</p>
    </header>
);

export default Header;
