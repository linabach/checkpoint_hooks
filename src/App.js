import { useState } from 'react';
import './App.css';
import { MovieList } from './components/Data/MovieList';
import ListMovies from './components/ListMovies/ListMovies';
import FilterMovie from './components/FilterMovie/FilterMovie';
import AddMovie from './components/AddMovie/AddMovie';
import FiltredList from './components/FiltredList/FiltredList'
import FiltredListt from './components/FiltredList/FiltredListt'




function App() {

  const [movie, setMovie]= useState(MovieList);
  const [search, setSearch]=useState("");


  const add = (newMovie) => {setMovie([newMovie, ...movie ])}

  return (
    <div className="App">
    <FilterMovie setSearch={setSearch} />
    {search === "" ? (
      <ListMovies Movies={movie} search={search} />
    ) : (
      <div>
        <FiltredList Movies={movie} search={search} />
        <FiltredListt Movies={movie} search={search} />
      </div>
    )}
    <AddMovie add={add} />
  </div>
)}

export default App
