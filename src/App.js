import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { ItemCount } from "./components/ItemCount";
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div className="App">
        <Navbar />

        <ItemListContainer />
        <ItemCount stock = { 2 } />
        < ItemList />
    </div>
  );
}

export default App;
