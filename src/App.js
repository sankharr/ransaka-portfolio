// styling
import './App.scss';

// components
import Header from './pages/home/header/Header';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
