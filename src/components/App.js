import React from 'react';
import moviesData from '../moviesData';
import MovieItem from './MovieItem/MovieItem';

// UI = fn(state)
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = movie => {
    const updateMovie = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    console.log(updateMovie);
    this.state.movies = updateMovie;
    this.setState({
      movies: updateMovie,
    });
  };

  render() {
    console.log('render', this.state, this);
    return (
      <div>
        {this.state.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          );
        })}
      </div>
    );
  }
}

// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

export default App;
