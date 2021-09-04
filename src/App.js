import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomeState from './context/homeContext/HomeState';
import NavDrawer from './components/home/NavDrawer';
import FormState from './context/formContext/FormState';

function App() {
  return (
    <BrowserRouter>
      <HomeState>
        <FormState>
          <NavDrawer />
        </FormState>
      </HomeState>
    </BrowserRouter>
  );
}

export default App;
