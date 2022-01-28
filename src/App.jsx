import './App.css';
import Home from './pages/Home';
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
