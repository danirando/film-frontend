import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.get('/films')
      .then(res => setFilms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Header full width */}
      <header className="bg-dark text-white w-100 py-3">
        <div className="container">
          <h1 className="mb-0">CineApp</h1>
        </div>
      </header>

      {/* Hero section full width */}
      <section className="bg-primary text-white text-center py-5 mb-5 w-100 hero">
        <div className="container">
          <div className="bg-text">

<h2 className="display-4">Benvenuto su CineApp</h2>
          <p className="lead">Scopri i migliori film della tua collezione!</p>
          </div>
          
        </div>
      </section>

      {/* Film Cards centered */}
      <main className="container">
        <div className="row justify-content-center">
          {films.map(film => (
            <div key={film.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm">
                {film.poster && (
                  <img
                    src={film.poster.startsWith('http') ? film.poster : `http://127.0.0.1:8000/storage/${film.poster}`}
                    className="card-img-top"
                    alt={film.title}
                   
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text">{film.genre?.name || '-'}</p>
                  <p className="card-text text-muted">{film.release_date || '-'}</p>
                  <Link to={`/films/${film.id}`} className="btn btn-primary mt-auto">Dettagli</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FilmList;
