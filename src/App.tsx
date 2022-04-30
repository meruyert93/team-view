import { useState } from "react";
import css from "./App.module.scss";
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamListForTest from './components/TeamListForTest'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={css["App"]}>
        <TeamListForTest/>
    </div>
  );
}

export default App;
