import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from '../src/components/BookPage/Book';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
       
    </Switch>
    </div>
  );
}

export default App;
