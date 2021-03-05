import './App.css';
import SearchNavbar from './components/SearchBar.jsx';
import Catalog from './components/Catalog.jsx';
import Pager from './components/Pager.jsx';
import Filter from './components/Filter.jsx';

function App() {
  return (
    <div className="App">
      <SearchNavbar />
      <Filter />
      <Catalog />
      <Pager />
    </div>
  );
}

export default App;
