import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomeState from './context/homeContext/HomeState';
import AppRoute from './route/AppRoute';

function App() {
  return (
    <BrowserRouter>
      <HomeState>
        <AppRoute />
      </HomeState>
    </BrowserRouter>
  );
}

export default App;
