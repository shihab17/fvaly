import Header from './components/common/Header';
import AppRouter from './services/AppRouter';

function App() {
  return (
    <div>
      <AppRouter>
        <Header />
      </AppRouter>
    </div>
  );
}

export default App;
