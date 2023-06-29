import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Investments from './components/Investments';
import Services from './components/Services';
import Pagina404 from './paginas/Pagina404';
import App from './paginas/Principal/App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cards" element={<Cards />} />
        <Route path="investments" element={<Investments />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}
