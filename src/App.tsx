import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTeamListForTest from './components/AddTeamListForTest';
import TeamList from './components/TeamList'
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className='headerText'>Your team for this test</h1>
        <div className='componentsWrapper'>
            <AddTeamListForTest/>
            <TeamList/>
        </div>
      </div>
    </Provider>

  );
}

export default App;
