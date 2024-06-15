import './App.css';
import { UserProvider } from './context/userContext';
import Main from './pages/main'


function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}


function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;
