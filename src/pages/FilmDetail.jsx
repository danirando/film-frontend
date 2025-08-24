import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/api';

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    api.get(`/films/${id}`)
      .then(res => setFilm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!film) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{film.title}</h2>
      
      {film.poster && (
        <img
          src={film.poster.startsWith('http') 
                ? film.poster 
                : `http://127.0.0.1:8000/storage/${film.poster}`}
          className="card-img-top mb-3 w-25"
          alt={film.title}
          style={{ objectFit: 'cover', width: '100%', maxHeight: '500px' }}
        />
      )}
      
      <p><strong>Genere:</strong> {film.genre?.name || '-'}</p>
      <p><strong>Data di uscita:</strong> {film.release_date || '-'}</p>
      <p><strong>Descrizione:</strong> {film.description || '-'}</p>
      <Link to="/" className="btn btn-secondary mt-3">Torna alla lista</Link>
    </div>
  );
};

export default FilmDetail;
