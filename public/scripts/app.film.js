// Menampilkan detail film //

import { getFilmDetail } from './api.js';
import { generateFilmDetail } from './utils.js';

const filmDetailElement = document.getElementById('film-detail');

document.addEventListener('DOMContentLoaded', async () => {

  try {
    
    const filmId = 123; // dapatkan film id
    const film = await getFilmDetail(filmId);
    
    if(!film) return;

    filmDetailElement.innerHTML = generateFilmDetail({
      cover: film.cover,
      title: film.title,
      year: film.year,
      description: film.description,
      genre: film.genre,
      rating: film.rating,
      duration: film.duration,
      director: film.director,
      writer: film.writer,
      cast: film.cast,
      language: film.language,
    });

  } catch (error) {
    console.error('Terjadi kesalahan:', error); 
  }

});