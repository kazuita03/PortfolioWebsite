import React from 'react'
import {Routes, Route, Redirect, Link} from 'react-router-dom'

import Home from './routes/Home'
import Photos from './routes/Photos'
import Resume from './routes/Resume'

function App() {
  return (
    <>
    {/* List of the routes of navbar. use when routing to new page.  */}
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Photos' element={<Photos />} />
        <Route path ='/Resume' element={<Resume />} />
      </Routes> 
    </>
  );
}

export default App;
