import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { ItemCount } from "./components/ItemCount";

function App() {
  return (
    <div className="App">
        <Navbar />

        <ItemListContainer />
        <ItemCount stock = { 2 } />
    </div>
  );
}

export default App;
