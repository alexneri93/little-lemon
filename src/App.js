import Header from './components/organisms/Header'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import MenuPage from './components/pages/MenuPage'
import {BookingPage} from './components/pages/BookingPage'
import OrderOnlinePage from './components/pages/OrderOnlinePage'
import LoginPage from './components/pages/LoginPage'
import Footer from './components/organisms/Footer'
import Main from './components/organisms/Main'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/booking' element={<BookingPage/>}/>
          <Route path='/order-online' element={<OrderOnlinePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
