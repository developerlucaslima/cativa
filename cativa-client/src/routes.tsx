import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AddAgency } from './pages/Admin/add-agency'
import { Agencies } from './pages/Admin/agencies'
import { UpdateAgency } from './pages/Admin/update-agency'
import { Home } from './pages/Home'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/add" element={<AddAgency />} />
        <Route path="/update/:id" element={<UpdateAgency />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
