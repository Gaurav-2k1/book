import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from '../src/components/BookPage/Book';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/footer/Footer';
import { Terms } from './components/Seat/Terms';
import { Selectseat } from './components/Seat/Selectseat';


function App() {
  return (
    <div className="App">      
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/moviepage"><MoviePage/></Route>
        <Route path="/book"><Book/></Route>
        <Route path="/terms"> <Terms/> <Selectseat/></Route>
    </Switch>
   
    </div>
  );
}

export default App;
