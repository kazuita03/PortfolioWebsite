import React from 'react'
import {Routes, Route, Redirect, Link} from 'react-router-dom'

import Home from './routes/Home'
import Photos from './routes/Photos'
import Resume from './routes/Resume'
import Dropoff2020 from './components/project/Dropoff2020'
import Easyinfooninformatics from './components/project/Easyinfooninformatics2022'
import Kidscodeclub2022 from './components/project/Kidscodeclub2022'
import Kidscodeclub2023 from './components/project/Kidscodeclub2023'
import Floopedu from './components/project/Floopedu2022'

function App() {

  return (
    <>
    {/* List of the routes of navbar. use when routing to new page.  */}
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Photos' element={<Photos />} />
        <Route path ='/Resume' element={<Resume />} />
        <Route path ='/kidscodeclub2022' element={<Kidscodeclub2022 />}/>
        <Route path ='/kidscodeclub2023' element={<Kidscodeclub2023 />}/>
        <Route path ='/floopedu2022' element={<Floopedu />}/>
        <Route path ='/dropoff2020' element={<Dropoff2020 />}/>
        <Route path ='/easyinfooninformatics2022' element={<Easyinfooninformatics />}/>
      </Routes> 
    </>
  );
}

export default App;
