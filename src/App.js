import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div>
    <NewComponent firstName={"Jon"} lastName={"Jacobs"} age={44} hairColor={"Black"}/>
    <NewComponent firstName={"Sam"} lastName={"Darnold"} age={24} hairColor={"Blonde"}/>
    <NewComponent firstName={"Louie"} lastName={"Chales"} age={14} hairColor={"Brown"}/>
    <NewComponent firstName={"David"} lastName={"Lang"} age={78} hairColor={"White"}/>
    </div>
  );
}

export default App;
