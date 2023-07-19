import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import FormContainer from './components/formContainer/FormContainer';
import { Marijuana } from './pages/marijuana/Marijuana';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={<FormContainer/>} />
        <Route path='/mari' element={<Marijuana/>} />
      </Route>
    </Routes>
  );
}
