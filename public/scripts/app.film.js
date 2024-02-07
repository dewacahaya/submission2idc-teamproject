console.log("oke")

const endpoint = "http://128.199.167.159/v1/idc/film/1"

async function hitAPI() {
    const api = await fetch(endpoint)
    const {data} = await api.json()
    console.log(data)
}

hitAPI()

// Data film statis
const moviesData = [
    { title: 'The Old Guard', genre: 'Action, Fantasy',},
    // Tambahkan film lainnya sesuai kebutuhan
];

// Fungsi untuk menampilkan data film
function displayMovies() {
    const moviesContainer = document.getElementById('title-films');

    moviesData.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <img ${movie.image}>
            <p>${movie.title}</p>
            <p>${movie.genre}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
window.onload = displayMovies;


