import logo from './logo.svg';
import './App.css';
import AddHobby from './addHobby';
import ViewHobby from './viewHobby';
import UpdateHobby from './updateHobby';
import Login from './Login';
function App() {
  return (
    <div className="App">
      {/* <AddHobby/> */}
      <ViewHobby/>
      <Login/>
      {/* <UpdateHobby/> */}
    </div>
  );
}

export default App;
