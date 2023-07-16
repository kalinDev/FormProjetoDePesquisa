import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Screening } from './pages/screening/Screening';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Audit } from './pages/audit/Audit';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/audit" element={<Audit />} />
      </Route>
    </Routes>
  );
}
