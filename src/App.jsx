import UserList from './components/UserList';
import { usersData } from './usersData';
import './App.css'; 

function App() {
  return (
    <main className="app-container">
      <UserList usersArray={usersData} />
    </main>
  );
}

export default App;