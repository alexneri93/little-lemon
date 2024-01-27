import Header from './components/organisms/Header'
import HomePage from './components/pages/Home'
import AboutPage from './components/pages/About'
import MenuPage from './components/pages/Menu'
import BookingPage from './components/pages/Booking'
import OrderOnlinePage from './components/pages/OrderOnline'
import LoginPage from './components/pages/Login'
import Footer from './components/organisms/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/order-online' element={<OrderOnlinePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
