import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/' index={true} element={<Home />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
