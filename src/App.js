import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomeState from './context/homeContext/HomeState';
import NavDrawer from './components/home/NavDrawer';

function App() {
  return (
    <BrowserRouter>
      <HomeState>
        <NavDrawer />
      </HomeState>
    </BrowserRouter>
  );
}

export default App;
