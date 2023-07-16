import './global.css';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';

export function App() {
  return (
    <div>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
   </div>
  );
}