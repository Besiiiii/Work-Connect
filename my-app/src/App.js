import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import { Home } from './pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className="App">
      < Header />
            <div className='Body'>
                < Sidebar />
                < Home />
            </div>
      </div>
      </header>
    </div>
  );
}

export default App;
