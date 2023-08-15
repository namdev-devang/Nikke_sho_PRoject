import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Hero } from './components/Hero';
// import { Hero } from './components/Hero';


function App() {
  return (
  <>
  <Header />
  <Routes>
    <Route path='/' element={<Hero />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/details/:id' element={<CardDetails />} />
  </Routes>
  <Footer />
  </>
  );
}

export default App;
