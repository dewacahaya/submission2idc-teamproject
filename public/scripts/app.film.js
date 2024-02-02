import { getFilmById, getFilms } from "./api.js";
import { generateRandomNumber, generateElement } from "./utils/index.js";

const filmCover = document.getElementById("recomen-film");
const judul = document.querySelector("#title-film");
const tahunRilis = document.querySelector("#year-film");

// ID yang kamu tambahkan di index.html sebagai pembungkus list film nya masukan disini
const listFilm = document.getElementById(""); // Masukan disini ID nya

document.addEventListener("DOMContentLoaded", async () => {
  // Buatkan sebuah fungsi yang akan mengambil data film berdasarkan id yang diinginkan
  const handleGetFilmById = async (id = 1) => {
    try {
      const response = await getFilmById(1);
      console.log(response);

      if (!response) return;

      judul.innerText = response.title || "wait";

      tahunRilis.innerHTML = response.year || "wait";

      // console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  };

  // Buatkan sebuah fungsi yang akan mengambil data film semua
  const handleGetFilms = async () => {
    try {
      const response = await getFilms();

      if (!response) return;

      // Karna response nya itu bentuk array maka lakukan perulangan untuk menampilkan semua film nya
      response?.forEach((film) => {
        // BENTUK FILM CARD supaya bisa di tampilkan di halaman web

        /**
         * Buat pembungkus nya
         */
        const containerCard = generateElement({
          tag: "div",
          className: "w-full self-center py-4 px-4 lg:w-1/3",
        });

        // Buat pembungkus untuk judul dan tahun rilis
        const containerTitle = generateElement({
          tag: "div",
        });

        // Buat judul film nya
        const title = generateElement({
          tag: "h3",
          innerText: film.title,
          id: "title-film",
          className: "flex justify-center text-white lg:text-2xl",
        });

        // Buat tahun rilis film nya
        const year = generateElement({
          tag: "p",
          id: "year-film",
          innerText: film.year,
          className: "flex justify-center text-xs text-white lg:text-sm",
        });

        // Masukan judul dan tahun rilis ke dalam pembungkus nya
        containerTitle.appendChild(...[title, year]);


        /**
         * Tugas mu sekarang buat untuk bagian anchor nya yang ini
         * <a href="/public/pages/detail.html">
              <div
                id="recomen-film"
                class="w-[170px] h-[220px] mx-auto flex mb-2 lg:w-[240px] lg:h-[330px]"
              >
                <img
                  src="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
                  class="min-h-0 rounded-md shadow-md"
                  alt=""
                />
              </div>
            </a>
         * ke bentuk JS nya
         */

        /**
         * Lalu jika kamu mau gambar nya berubah mengikuti data nya ya
         * tinggal ganti aja src nya dengan data dari film nya
         * contoh: `src: film.cover` pas createElement nya 
         */
      });

      console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  };

  // Panggil fungsi handleGetFilms nya
  handleGetFilms();
});
