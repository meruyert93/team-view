import css from "./App.module.scss";
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTeamListForTest from './components/AddTeamListForTest';
import TeamList from './components/TeamList'
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className={css["App"]}>
          <AddTeamListForTest/>
          <TeamList/>
      </div>
    </Provider>

  );
}

export default App;
