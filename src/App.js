import './App.css';
import { Header, Footer } from './components';
import React, { Suspense } from 'react';
import { TitleContext } from './titleContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListOfUsers from './components/ListOfUsers/ListOfUsers';
const Counter = React.lazy(() => import('./components/counter/counter'));
const AboutUs = React.lazy(() => import('./components/AboutUs/AboutUs'));
const ContactUs = React.lazy(() => import('./components/ContactUs/ContactUs'));

function App() {
  return (
    <div className="App">
      <Router>
        <TitleContext.Provider value="React">
          <Header />
          <Routes>
            <Route path='/' element={ <Suspense fallback={<div> Counter Loading...</div>}><Counter /></Suspense>} ></Route>
            <Route path='/aboutUs' element={<Suspense fallback={<div> About Us Loading...</div>}><AboutUs /></Suspense>}></Route>
            <Route path='/contactUs' element={<Suspense fallback={<div> Contact Us Loading...</div>}><ContactUs/></Suspense>}></Route>
          </Routes>
        </TitleContext.Provider>
        
      </Router>
      <ListOfUsers />
    
      <Footer>  Footer section </Footer>


    </div>
  );
}

export default App;


