import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { ItemCount } from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <div className="container">
      < Navbar/>

      < ItemListContainer/>
      < ItemCount />
      </div>
    </div>
  );
}

export default App;
