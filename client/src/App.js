import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from '../src/components/BookPage/Book';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Switch>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
       
=======
    <div className="App">      
      <Switch>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
        <Route path="/"><Home/></Route>
>>>>>>> cedc09669c7635d30316e9ec6d3cc4910cd7abcd
    </Switch>
    </div>
  );
}

export default App;
