import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from './components/Book';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>Book My Show</h1>
      
      <Switch>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
        
    </Switch>
    </div>
  );
}

export default App;
