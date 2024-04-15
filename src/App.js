import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Onboarding} from './components';
import {Developer} from './pages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
AOS.init();
function App() {
  return (
    <div class="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Onboarding/>}/> */}
          <Route path="/" element={<Developer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
