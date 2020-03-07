/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';

const movie = {
  title: 'Avengers: Infinity War',
  vote_avetage: 8.5,
  image:
    'https://www.film.ru/sites/default/files/movies/posters/7465149-1036963.jpg',
  overview:
    'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
};
function Image(props) {
  // console.log('Image props:', props);
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log('Movie props:', props);
//   const {
//     data: { title, vote_avetage, image },
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_avetage}</p>
//     </div>
//   );
// }

// MovieItem = new React.Component()
class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_avetage, image },
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avetage}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
