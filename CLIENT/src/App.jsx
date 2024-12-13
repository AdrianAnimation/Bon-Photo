import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import PhotographersList from './components/PhotographersList';
import PhotographerProfile from './components/PhotographerProfile';
import PhotographerCatalog from './components/PhotographerCatalog';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<PhotoGrid />} />
              <Route path="/photographers" element={<PhotographersList />} />
              <Route path="/photographers/:id" element={<PhotographerProfile />} />
              <Route path="/photographers/:username/catalog" element={<PhotographerCatalog />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;