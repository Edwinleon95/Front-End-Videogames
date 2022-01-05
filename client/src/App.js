import './App.css';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getGenres, getVideogames } from './redux/actions/actions';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import LandinPage from './components/landingPage/LandingPage';
import VideogameDetail from './components/videogameDetail/VideogameDetail';
import Create from './components/createVideogame/Create';
function App() {
  const dispatch = useDispatch();
 

  useEffect(() =>{
    dispatch(getGenres());
    dispatch(getVideogames());
  }, [dispatch]);
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandinPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/detail/:id' component={VideogameDetail}/>
        <Route exact path='/create' component={Create}/>
      </Switch>
    </div>
  );
}

export default App;
