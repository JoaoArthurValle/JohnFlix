import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Assistir from './components/Pages/Assistir';
function AppRoutes() {
  return (
    <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assistir/" element={<Assistir />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;   