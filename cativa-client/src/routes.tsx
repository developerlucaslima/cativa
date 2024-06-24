import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AddAgency } from './pages/admin/add-agency'
import { Agencies } from './pages/admin/agencies'
import { UpdateAgency } from './pages/admin/update-agency'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agencies />} />
        <Route path="/add" element={<AddAgency />} />
        <Route path="/update/:id" element={<UpdateAgency />} />
      </Routes>
    </BrowserRouter>
  )
}
