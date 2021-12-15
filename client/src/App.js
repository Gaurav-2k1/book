import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from './components/Book';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">      
      <Switch>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
        <Route path="/"><Home/></Route>
    </Switch>
    </div>
  );
}

export default App;
