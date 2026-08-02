import {BrowserRouter,Routes,Route } from 'react-router'
import Home from '../Pages/Home'

function Layout() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Layout
