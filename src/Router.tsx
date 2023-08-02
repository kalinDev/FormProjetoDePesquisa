import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import FormContainer from './components/formContainer/FormContainer';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<FormContainer />} />
      </Route>
    </Routes>
  );
}
