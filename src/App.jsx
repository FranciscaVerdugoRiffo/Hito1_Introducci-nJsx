import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
    return (
        <section>
            <Navbar />
            <Home />
            <Footer />
        </section>
    );
}

export default App;
