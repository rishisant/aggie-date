import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

// use browser router
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;