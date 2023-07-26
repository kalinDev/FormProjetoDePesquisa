import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import FormContainer from './components/formContainer/FormContainer';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={<FormContainer/>} />
      </Route>
    </Routes>
  );
}
