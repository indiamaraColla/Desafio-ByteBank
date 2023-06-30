import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Investments from './components/Investments';
import Services from './components/Services';
import Home from './pages/Home';
import PageError from './pages/PageError';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="cards" element={<Cards />} />
        <Route path="investments" element={<Investments />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
